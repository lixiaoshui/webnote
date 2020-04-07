function comList() {
	var $comList = $(''
		+ '<div class="notepad-com-list">'
		+ '<input class="editor" type="text"><br>'
		+ '<ul class="list">'
		+ '</ul>'
		+ '</div>');
	var $editor = $comList.find('.editor'),
		$list = $comList.find('.list'),
		$items;
	var config = {
		container: '',
		list: [],
		select: 0,
		width: '200px',
		isFont: false,
		isFontStyle: false,
		selectHandler: null
	};
	function setFontStyle(item, style) {
		if (style === '斜体') {
			item.css({ 'font-style': 'italic' });
			return;
		}
		if (style === '粗体') {
			item.css({ 'font-weight': 'bold' });
			return;
		}
		if (style === '粗偏斜体') {
			item.css({ 'font-weight': 'bold', 'font-style': 'italic' });
			return;
		}
	}
	function fillData() {
		var i = 0, $item;
		if (config.isFont) {
			for (i = 0; i < config.list.length; i++) {
				$item = $('<li class="item"></li>');
				$item.css({ 'font-family': config.list[i] });
				$list.append($item.html(config.list[i]));
			}
		} else if (config.isFontStyle) {
			for (i = 0; i < config.list.length; i++) {
				$item = $('<li class="item"></li>');
				setFontStyle($item, config.list[i]);
				$list.append($item.html(config.list[i]));
			}
		} else {
			for (i = 0; i < config.list.length; i++) {
				$item = $('<li class="item"></li>');
				$list.append($item.html(config.list[i]));
			}
		}
		$items = $list.find('.item');
	}
	function setSelect(n) {
		$($items[n]).addClass('selected');
		$editor.val(config.list[n]);
		$editor.select();
	}
	function init() {
		var $oldList = $(config.container).find('.notepad-com-list');
		if ($oldList.length !== 0) $oldList.remove();
		$(config.container).append($comList);
		$comList.css({ width: config.width });
		fillData();
		setSelect(config.select);
	}
	this.show = function (conf) {
		$.extend(config, conf);
		init();
		$list.click(function (e) {
			$($items[config.select]).removeClass('selected');
			config.select = config.list.indexOf($(e.target).html());
			$($items[config.select]).addClass('selected');
			$editor.val(config.list[config.select]);
			$editor.select();
			config.selectHandler(config.select);
		});
		$editor.keyup(function () {
			var i = 0;
			for (i = 0; i < config.list.length; i++) {
				if (config.list[i].indexOf($editor.val()) === 0) break;
			}
			if (i === config.list.length) return;
			$items[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
			$($items[config.select]).removeClass('selected');
			$($items[i]).addClass('selected');
			config.select = i;
		});
	};
}

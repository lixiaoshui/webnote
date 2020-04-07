var $dlgFont = (function () {
	var $dlg = $(''
		+ '<div class="webnote-font">'
		+ '<div class="dialogbox notepad-dlgbox">'
		+ '<div class="webnote-titlebar">'
		+ '<p class="title">字体</p>'
		+ '<span class="close-btn">✖</span>'
		+ '</div>'
		+ '<div class="main webnote-main">'
		+ '<div class="font-family"><p>字体(F):</p></div>'
		+ '<div class="font-style"><p>字形(Y):</p></div>'
		+ '<div class="font-size"><p>大小(S):</p></div>'
		+ '<fieldset class="sample">'
		+ '<legend>示例</legend>'
		+ '<p>AaBbYyZz</p>'
		+ '</fieldset>'
		+ '<div class="script">'
		+ '<label>'
		+ '脚本(R):<br>'
		+ '<select>'
		+ '<option value="西欧语言">西欧语言</option>'
		+ '<option value="中文 GB2312">中文 GB2312</option>'
		+ '</select>'
		+ '</label>'
		+ '</div>'
		+ '<input class="btn-ok btn" type="button" value="确定">'
		+ '<input class="btn-cancel btn" type="button" value="取消">'
		+ '</div>'
		+ '</div>'
		+ '</div>');
	var $btnOk = $dlg.find('.btn-ok'),
		$btnClose = $dlg.find('.close-btn'),
		$btnCancel = $dlg.find('.btn-cancel'),
		$titleBar = $dlg.find('.webnote-titlebar');
	function init() {
		var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
			styles = ['常规', '斜体', '粗体', '粗偏斜体'],
			sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
		var listf = new comList();
		listf.show({
			container: '.webnote-font .font-family',
			width: '176px',
			list: fonts,
			isFont: true,
			selectHandler: function (e) { console.log(fonts[e]); }
		});
		var lists = new comList();
		lists.show({
			container: '.webnote-font .font-style',
			select: 3,
			width: '132px',
			list: styles,
			isFontStyle: true,
			selectHandler: function (e) { console.log(styles[e]); }
		});
		var listt = new comList();
		listt.show({
			container: '.webnote-font .font-size',
			width: '64px',
			list: sizes,
			selectHandler: function (e) { console.log(sizes[e]); }
		});
	}
	function destory() { $dlg.remove(); }
	function show() {
		$('body').append($dlg);
		init();
		$dlg.find('.dialogbox').draggable({ handle: $titleBar });

		$btnClose.click(destory);
		$btnCancel.click(destory);
		$btnOk.click(destory);
	}
	return { show: show };
}());

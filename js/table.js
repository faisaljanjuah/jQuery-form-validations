function initDatatable(table){
	var instance;
	var fileTitle = $('title').text();
	// var table = makeStr(6);
	// table = 'var'+table;
	// $(this).addClass(table);
	// table = '.'+table;
	$(table).wrap('<div class="datatableWrapper"></div>');

	var hideColumns = [];
	if($(table).attr('data-hidecolumns') != undefined && $(table).attr('data-hidecolumns').length>0){
		hideColumns = JSON.parse($(table).attr('data-hidecolumns'));
	}
	var tableDom = 'fltip';
	if($(table).attr('data-downloadable') != undefined && $(table).attr('data-downloadable').length>0){
		if($(table).attr('data-downloadable').toLowerCase()=='true'){
			tableDom = 'fltipB'; // 'B' indicates Buttons creation
		}
	}

	instance = $(table).DataTable({
		dom: tableDom,
		aaSorting: [],
		autoWidth: false,
		responsive: true,
		columnDefs: [{ 'targets': hideColumns, 'visible': false, 'searchable': false }],
		search: { // setting for multi-values Search "Officer|Regional|Chief" 
			"regex": true,
			"smart": false,
		},
		buttons: [{
			extend: "pdf",
			title: fileTitle,
			className: "btn btn-download",
			exportOptions: {
				columns: ":not(th.noExport)"
			}
		},
		{
			extend: "csv",
			title: fileTitle,
			className: "btn btn-download",
			exportOptions: {
				columns: ":not(th.noExport)"
			}
		},
		{
			extend: "excel",
			title: fileTitle,
			className: "btn btn-download",
			exportOptions: {
				columns: ":not(th.noExport)"
			}
		}],
	});

	if($(table).attr('data-sidefilter') != undefined && $(table).attr('data-sidefilter').length>0){
		var sideFilter = parseInt($(table).attr('data-sidefilter'));				
		$(table).find('thead tr > th:nth-child('+sideFilter+')').addClass('tableSideFilter');
		$(table).closest('.datatableWrapper').prepend('<div class="filterColumn"></div>')
		var that = $(table);
		instance.columns('.tableSideFilter').every(function(i) {
			var listItem = '';
			var columnData = this.cache('search');
			var uniqueData = [];
			$.each(columnData, function(i, el){
				if($.inArray(el, uniqueData) === -1) uniqueData.push(el);
			});
			$.each(uniqueData, function(d, e){
				if(e.length>0){
					listItem += '<li id="li_'+i+'_'+d+'" data-search="'+e+'">'+e+'</li>';
				}
			});
			if(listItem.length>0){
				var htmlCol = '<div class="colScroll"><ul class="sideColFilter">';
				htmlCol += listItem;
				htmlCol += '</ul></div>';
				that.closest('.datatableWrapper').find('.filterColumn').append(htmlCol);
			}
		});

		jQuery(document).on('click', '.datatableWrapper .sideColFilter li', function(){
			$(table).closest('ul').find('li').removeClass('active');
			$(table).addClass('active');
			var searchString = [$(table).text()];
			searchString = searchString.join('|');
			var _escape_parenthesis = new RegExp( '(\\' + [ '(', ')'].join('|\\') + ')', 'g' );        
			searchString = searchString.replace( _escape_parenthesis, '\\$1' );
			console.log(instance);
			instance.search(searchString, true, false).draw();
		});

		that.closest('.datatableWrapper').find('.colScroll').css('max-height',that.closest('.datatableWrapper').find('.dataTables_wrapper').height());
		that.closest('.datatableWrapper').find('.colScroll').mCustomScrollbar({
			axis:"y",
			snapOffset: 2,
			scrollInertia: 150,
			mouseWheelPixels: 80,
			alwaysShowScrollbar: 1
		});
		instance.columns('.tableSideFilter').visible(false);
	}
	instance.columns.adjust().draw();
}
	$(function () {

		// Validations Start
		$(document).on('input', '.numbersOnly', function () {
			this.value = this.value.replace(/[^0-9]+/g, '');
		});
		$(document).on('mouseenter paste', '.numbersOnly', function () { // Prevent Paste & Drag
			var val = $(this).val();
			if (val != '0') {
				val = val.replace(/[^0-9]+/g, "");
				$(this).val(val);
			}
		});
		$(document).on('input', '.alphabetsOnly', function () {
			this.value = this.value.replace(/[^A-Za-z ]/g, '');
		});
		$(document).on('mouseenter paste', '.alphabetsOnly', function () { // Prevent Paste & Drag
			var val = $(this).val();
			if (val != '0') {
				val = val.replace(/[^A-Za-z ]+/g, "");
				$(this).val(val);
			}
		});
		$(document).on('input', '.alphanumeric', function () {
			this.value = this.value.replace(/[^A-Za-z0-9 ]/g, '');
		});
		$(document).on('mouseenter paste', '.alphanumeric', function () { // Prevent Paste & Drag
			var val = $(this).val();
			if (val != '0') {
				val = val.replace(/[^A-Za-z0-9 ]+/g, "");
				$(this).val(val);
			}
		});
		$(document).on("keypress", ".allowDecimals", function (evt) {
			evt = (evt) ? evt : window.event;
			var charCode = (evt.which) ? evt.which : evt.keyCode;
			if (charCode == 8 || charCode == 37) {
				return true;
			} else if (charCode == 46 && $(this).val().indexOf('.') != -1) {
				return false;
			} else if (charCode > 31 && charCode != 46 && (charCode < 48 || charCode > 57)) {
				return false;
			}
			return true;
		});
		$(document).on("blur mouseenter paste", ".allowDecimals", function () {
			var val = $(this).val();
			if (val != '0') {
				val = val.replace(/[^0-9\.]+/g, "");
				$(this).val(val);
			}
		});
		$(document).on('input', '.validateEmail', function () {
			this.value = this.value.replace(/[^A-Za-z0-9\.\-_@]/g, '');
		});
		$(document).on('mouseenter paste', '.validateEmail', function () { // Prevent Paste & Drag
			var val = $(this).val();
			if (val != '0') {
				val = val.replace(/[^A-Za-z0-9\.\-_@]+/g, "");
				$(this).val(val);
			}
		});
		$(document).on('blur', '.validateEmail', function () {
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if (!emailReg.test($(this).val())) {
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});
		$(document).on('blur change', '.required', function () {
			if ((!$(this).val().replace(/\s/g, '').length) || $(this).val().length < 1 || $(this).val() == undefined || $(this).val() == "") {
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});


		$(document).on('blur change', '.requiredSelect', function () {
			var val = $(this).val();
			if ($.trim(val) == "" || $.trim(val) == "null" || $.trim(val) == "0") {
				$(this).addClass('error');
				$(this).closest(".validation_message_container").find(".select2-selection").addClass("errorHere");
			} else {
				$(this).removeClass('error success');
				$(this).closest(".validation_message_container").find(".select2-selection").removeClass('errorHere success');
			}
		});
		// Fields Validation Ends

		// Form Validation Starts
		$(document).on('submit', '.validateForm', function (e) {
			//e.preventDefault();
			var validForm = true;
			$(this).find('.numbersOnly').each(function () {
				$(this).removeClass('error success');
				if (!(this.value == "" || /^[0-9]+$/.test(this.value))) {
					$(this).addClass('error');
					validForm = false;
				}
			});
			$(this).find('.alphabetsOnly').each(function () {
				$(this).removeClass('error success');
				if (!(this.value == "" || /^[A-Za-z]+$/.test(this.value))) {
					$(this).addClass('error');
					validForm = false;
				}
			});
			$(this).find('.alphanumeric').each(function () {
				$(this).removeClass('error success');
				if (!(this.value == "" || /^[A-Za-z0-9]+$/.test(this.value))) {
					$(this).addClass('error');
					validForm = false;
				}
			});
			$(this).find('.allowDecimals').each(function () {
				$(this).removeClass('error success');
				if (this.value != "") {
					if (/^[0-9\.]+$/.test(this.value)) {
						if ((this.value.match(/\./g) || []).length < 2) {
							// console.log('valid');
							// $(this).addClass('success');
							// Success Case
						} else {
							validForm = false;
							$(this).addClass('error');
						}
					} else {
						validForm = false;
						$(this).addClass('error');
					}
				}
			});
			$(this).find('.validateEmail').each(function () {
				$(this).removeClass('error success');
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if (!emailReg.test($(this).val())) {
					validForm = false;
					$(this).addClass('error');
				}
			});
			$(this).find('.required').each(function () {
				$(this).removeClass('error success');
				if ((!$(this).val().replace(/\s/g, '').length) || $(this).val().length < 1 || $(this).val() == undefined || $(this).val() == "") {
					validForm = false;
					$(this).addClass('error');
				}
			});

			if ($(this).find('.requiredSelect').length > 0) {
				$(this).find('.requiredSelect').each(function () {
					$(this).removeClass('error success');
					$(this).closest(".validation_message_container").find(".select2-selection").removeClass('errorHere success');
					var val = $(this).val();
					if (!$(this).prop("disabled")) {
						if ($.trim(val) == "" || $.trim(val) == "null" || $.trim(val) == "0") {
							e.preventDefault();
							validForm = false;
							$(this).addClass('error');
							$(this).closest(".validation_message_container").find(".select2-selection").addClass("errorHere");
						}
					}
				});
			}
			return validForm;
		});


		// Body Class for Menu
		$('body').addClass('menuExpended');
		$(document).on('click', '.hamburger', function () {
			$('body').toggleClass('menuCollapsed');
			$('body').toggleClass('menuExpended');
			$(".mainMenu .hasChildren.active ul").slideUp();
			$(".mainMenu .hasChildren.active").removeClass("active");
			$(".navigationInBody").remove();
		});

		// SideMenu open sub-menu
		$('.sidebarNav .mainMenu > li').each(function () {
			if ($(this).find('ul').length > 0) {
				$(this).addClass('hasChildren');
			}
		});

		// Toggle for expended Menu (Slide Up/Down)
		$(document).on("click", '.menuExpended .sidebarNav .mainMenu > .hasChildren > a', function (p) {
			$(".navigationInBody").remove();
			p.preventDefault();
			var thiselement = $(this).parent();
			if (!thiselement.hasClass('active')) {
				$('.mainMenu li ul').slideUp();
				$('.mainMenu > li').removeClass('active');
				thiselement.find('> ul').slideDown();
				thiselement.addClass('active');
			} else {
				thiselement.removeClass('active');
				thiselement.find('> ul').slideUp();
			}
		});
		// Toggle for Collapsed Menu 
		$(document).on("click", '.menuCollapsed .sidebarNav .mainMenu > .hasChildren > a', function (p) {
			p.preventDefault();
			var ofTop = $(this).offset().top;
			$(".navigationInBody").remove();
			var thiselement = $(this).parent();
			if (!thiselement.hasClass('active')) {
				$('.mainMenu > li').removeClass('active');
				thiselement.addClass('active');
				thiselement.find('> ul').clone().addClass("navigationInBody").appendTo("body");
			} else {
				thiselement.removeClass('active');
			}
		});
		
		if ($('.sidebarNav > .sidebarContent, .contentArea > .contentScroll').length > 0) {
			// Custom Scrollbar for Side menu AND Content Area
			$('.sidebarNav > .sidebarContent, .contentArea > .contentScroll').mCustomScrollbar({
				axis: "y",
				snapOffset: 1,
				scrollInertia: 100,
				mouseWheelPixels: 100,
				alwaysShowScrollbar: 1
			});
		}

		// Datatable Function execution
		if ($('.initDatatable').length > 0) {
			initDatatable();
		}

		// Table Function Start
		function makeStr(length) {
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			for (var i = 0; i < length; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			return text;
		}

		function initDatatable() {
			var instance = [];
			var fileTitle = $('title').text();
			$('.initDatatable').each(function (t) {
				$(this).wrap('<div class="datatableWrapper"></div>');
				var colFilter = '';
				var table = makeStr(6); // Creating random string for unique Class on each table
				table = 'var' + table; // Class name must start with Alphabet
				$(this).closest('.datatableWrapper').addClass(table); // adding unique Class to table wrapper 
				table = '.' + table; // making string as a Class for using in jQuery
				colFilter = table; // Creating unique Button class for Filter outside Table.
				table = table + ' .initDatatable'; // Specifying unique table


				var hideColumns = []; // hide Columns, pass array like [0,3,4]
				if ($(table).attr('data-hidecolumns') != undefined && $(table).attr('data-hidecolumns').length > 0) {
					hideColumns = JSON.parse($(table).attr('data-hidecolumns'));
				}
				var tableDom = 'fltip'; // f=Filter(Search), l=Length, t=Table, i=Information, p=Pagination 
				if ($(table).attr('data-downloadable') != undefined && $(table).attr('data-downloadable').length > 0) {
					if ($(table).attr('data-downloadable').toLowerCase() == 'true') {
						tableDom = 'fltipB'; // 'B' indicates Buttons creation
					}
				} // Enable Button on the basis of DOM string in Datatable

				instance[t] = $(table).DataTable({ // instance[t] initialize every table in different array index
					dom: tableDom,
					aaSorting: [],
					autoWidth: false,
					responsive: true,
					columnDefs: [{
						'targets': hideColumns,
						'visible': false,
						'searchable': false
					}], // Hidden Columns are not Filterable
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
						}
					],
				});

				if ($(table).attr('data-sidefilter') != undefined && $(table).attr('data-sidefilter').length > 0) {
					var sideFilter = parseInt($(table).attr('data-sidefilter'));
					$(table).find('thead tr > th:nth-child(' + sideFilter + ')').addClass('tableSideFilter');
					instance[t].columns('.tableSideFilter').every(function (i) {
						var listItem = '';
						var columnData = this.cache('search');
						var uniqueData = [];
						$.each(columnData, function (i, el) {
							if ($.inArray(el, uniqueData) === -1) uniqueData.push(el);
						});
						$.each(uniqueData, function (d, e) {
							if (e.length > 0) {
								listItem += '<li id="li_' + i + '_' + d + '" data-search="' + e + '">' + e + '</li>';
							}
						});
						if (listItem.length > 0) {
							var htmlCol = '<div class="filterColumn"><div class="colScroll"><ul class="sideColFilter">' + listItem + '</ul></div></div>';
							$(table).closest('.datatableWrapper').prepend(htmlCol);
						}
					});
					$(document).on('click', colFilter + ' .sideColFilter li', function () {
						if ($(this).hasClass('active')) { // Toggle Search (search will behave like Checkbox)
							$(this).removeClass('active');
							instance[t].search('', true, false).draw();
						} else {
							$(this).closest('ul').find('li').removeClass('active');
							$(this).addClass('active');
							var searchString = [$(this).text()];
							searchString = searchString.join('|');
							var _escape_parenthesis = new RegExp('(\\' + ['(', ')'].join('|\\') + ')', 'g'); // if search string has (
							searchString = searchString.replace(_escape_parenthesis, '\\$1');
							instance[t].search(searchString, true, false).draw();
						}
					});
					$(table).closest('.datatableWrapper').find('.colScroll').css('max-height', $(table).closest('.datatableWrapper').find('.dataTables_wrapper').height());
					$(table).closest('.datatableWrapper').find('.colScroll').mCustomScrollbar({
						axis: "y",
						snapOffset: 1,
						scrollInertia: 100,
						mouseWheelPixels: 100,
						alwaysShowScrollbar: 1
					});
					instance[t].columns('.tableSideFilter').visible(false); // hiding Filter column from table but still searchable. 
				}
				instance[t].columns.adjust().draw(); // redraw table to adjust table width
			});
		}
		// Table Function Ends

	});

	$(window).on("load", function () {

		//active left Nav
		var current = location.pathname;
		$('.mainMenu li a').each(function () {
			var $this = $(this);
			var elemSecondary = $(this).attr("data-secondary");
			if ($this.attr('href') == current || current == elemSecondary) {
				$this.addClass('active');
				$this.closest(".hasChildren").addClass('active');
				$this.closest("ul").show()
			}
		});

		$("#preloader").fadeOut();

		if ($(".hideToastOnload".length > 0)) {
			setTimeout(function () {
				$(document).find(".hideToastOnload").removeClass('show');
			}, 3000);
		}

	});
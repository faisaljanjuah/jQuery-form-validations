<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
	<title>ADMIN UI Title</title>

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<meta charset="utf-8" />

	<meta name="author" content="ADMIN UI Author" />
	<meta name="description" content="ADMIN UI Description" />
	<meta name="keywords" content="Mobile, app, cloud" />

	<link rel="apple-touch-icon" href="img/icon/57.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="img/icon/72.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="img/icon/114.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="img/icon/144.png" />

	<link href="css/adminui.css" rel="stylesheet">
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/table.js"></script>
	<!-- HTML5 shim for IE backwards compatibility -->
	<!--[if lt IE 9]>
	<script src="js/html5.js"></script>
<![endif]-->

</head>

<body>


	<!-- <div class="loadWrapper" data-description="loader example 1">
	<div class="load-bar">
		<div class="bar"></div>
		<div class="bar"></div>
	</div>
</div> -->

	<!-- <div class="loadWrapper" data-description="loader example 2">
	<div class="ringLoader"></div>
</div> -->

	<div class="mainWrapper">

		<?php include 'inc/header.php'; ?>
		<?php include 'inc/sidebar.php'; ?>
		<div class="contentArea">
			<?php include 'inc/survey.php'; ?>
			<?php include 'inc/footer.php'; ?>
		</div>

	</div>


	<script src="js/bootstrap.min.js"></script>
	<script src="js/mCustomScrollbar.js"></script>
	<script src="js/mCustomScrollbarMouseWheel.js"></script>
	<script src="js/datatables.min.js"></script>

	<script src="js/dataTables.buttons.min.js"></script>
	<script src="js/dataTables.jszip.min.js"></script>
	<script src="js/dataTables.pdfmake.min.js"></script>
	<script src="js/dataTables.vfs_fonts.js"></script>
	<script src="js/dataTables.buttons.html5.min.js"></script>

	<script src="js/custom.js"></script>
</body>

</html>
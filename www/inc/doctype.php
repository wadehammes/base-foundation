<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
		<title>Base</title>
		<meta name="description" content="" />

		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=no" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

		<!-- FAVICON -->
		<link rel="shortcut icon" href="img/icons/favicon.png" />
		<!--[if IE]>
			<link rel="shortcut icon" href="icons/favicon.ico" />
		<![endif]-->

		<!-- SOCIAL META -->
		<meta property="og:title" content=""/>
		<meta property="og:image" content=""/>
		<meta property="og:site_name" content=""/>
		<meta property="og:description" content="Base Template" />

		<!-- STYLE -->
		<link href="css/app.min.css" media="all" rel="stylesheet" type="text/css" />
		<!--[if lt IE 9]>
			<link href="templates/css/ie.min.css" media="all" rel="stylesheet" type="text/css" />
		<![endif]-->

		<!-- SCRIPT -->
		<script type="text/javascript">window._root = '/';</script>
	    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
	    <script type="text/javascript" src="js/vendor/modernizr.min.js?<?php echo rand(0,10000000);?>"></script>
	    <script type="text/javascript" src="js/vendor/html5shiv.js?<?php echo rand(0,10000000);?>"></script>

	</head>
	<body id="<?php print $page; ?>" class="<?php echo implode(' ', $pageClasses); ?>">

<?php include('inc/header.php'); ?>

		<div id="content-wrapper">


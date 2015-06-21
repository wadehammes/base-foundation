<!doctype html>
<!--[if lt IE 7 ]> <html <?php language_attributes(); ?> class="ie6"> <![endif]-->
<!--[if (IE 7)&!(IEMobile) ]><html <?php language_attributes(); ?> class="ie7"> <![endif]-->
<!--[if (IE 8)&!(IEMobile) ]><html <?php language_attributes(); ?> class="ie8"> <![endif]-->
<!--[if (IE 9)&!(IEMobile) ]><html <?php language_attributes(); ?> class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html <?php language_attributes(); ?> class="no-js"> <!--<![endif]-->
<html>
	<head>
		<title>Base</title>

		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

		<!-- STYLE -->
		<link href="css/app.min.css" media="all" rel="stylesheet" type="text/css" />
		<!--[if lt IE 9]>
			<link href="templates/css/ie.min.css" media="all" rel="stylesheet" type="text/css" />
		<![endif]-->

		<!-- SCRIPT -->
	  <script async type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	  <script async type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
	  <script async type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>

	</head>
	<body id="<?php print $page; ?>" class="<?php echo implode(' ', $pageClasses); ?>">

<?php include('inc/header.php'); ?>

		<div id="content-wrapper">


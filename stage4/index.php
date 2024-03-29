<?php 
    $title = "HTML5 Practice";
    $subtitle = "Day 4";
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title><?php echo "$title: $subtitle"; ?></title>
        <link href="css/default.css" rel="stylesheet" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.0-rc.1/jquery.mobile-1.1.0-rc.1.min.css" />

        <!-- jQuery -->
        <!-- include jquery toolkit here -->
	<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.1.0-rc.1/jquery.mobile-1.1.0-rc.1.min.js"></script>
	
        <!-- default javascript content -->
        <!-- include your default js file here -->
	<script data-main="scripts/main" src="scripts/require.js"></script>
	
    </head>
    <body>
<div data-role="page" id="page1">
	
	<div data-role="header">
        <!header>
            <h1><?php echo "<span class='title'>$title</span>: <span class='subtitle'>$subtitle</span>"; ?></h1>
        <!/header>
	</div>
	
	<div data-role="content" data-theme="a">
        <!-- add your content here -->
     		<h3>-- Enjoy! --</h3>
		<a href="#jqmdialog" data-rel="dialog">Open dialog</a>
	</div>
	
        <footer>
            <div><?php echo $title; ?> v1.0</div>
            <div>@author Alberto Miranda <a href="mailto:alberto@nextive.com">&lt;alberto@nextive.com&gt;</a></div>
            <div>@author Esteban Abait <a href="mailto:esteban.abait@nextive.com">&lt;esteban.abait@nextive.com&gt;</a></div>
        </footer>

</div> <! page1>

	
	<div id=jqmdialog data-role="page" data-rel="dialog">
		<div data-role="header">
			<h1>JQuery Mobile Dialog</h1>
		</div><!-- /header -->
		<div data-role="content" data-theme="c">
			<div id="dirQuote"></div>
			<a href="#page1" data-role="button">Back</a> 
		</div>
	</div>
	
	
    </body>
</html>

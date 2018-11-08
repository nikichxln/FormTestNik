<?php
	session_start();
	
	if ( !empty($_POST) ) {
		$_SESSION['auth'] = true;
	}

	header('Location: index.php');
?>
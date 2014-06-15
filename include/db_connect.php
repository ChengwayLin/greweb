<?php

		$mysqli = new mysqli("localhost", "phpFileAccess", "m2ZnrQbrM3ARwMhH", "gre");
		
		$mysqli->set_charset("utf8");

		/* check connection */
		if ($mysqli->connect_errno) {
		    printf("Connect failed: %s\n", $mysqli->connect_error);
		    exit();
		}


?>
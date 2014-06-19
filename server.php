<?php



	include 'include/db_connect.php';

	$vocabulary = $_POST['vocabulary'];
	$pronunciation = $_POST['pronunciation'];


	$data = json_decode( $_POST['vocabularyData'] );
	echo "JSON:".$data->vocabulary."<br/>";
	echo "JSON:".$data->pronunciation."<br/>";
	//echo "JSON:".$data->definitions[0]->defChinese."<br/>";

    foreach ($data->definitions as $key => $value) {
    echo $key.$value->defChinese."<br/>";
    echo $value->defEnglish."<br/>";
    echo $value->setence1."<br/>";
    echo $value->setence2."<br/>"; 
    echo $value->setence3."<br/>";

    	foreach ($value->synonyms as $key => $value) {
    		echo $value."<br/>";
    	}

    }
	
    foreach ($data->derivatives as $key => $value) {
    echo "derivatives: ".$value."<br/>";
    }

    foreach ($data->tags as $key => $value) {
    echo "tags: ".$value."<br/>";
    }

	echo "etymology:".$data->etymology."<br/>";

// $result = $mysqli->query("SELECT * FROM vocabulary ");

//    while ($assoc = $result->fetch_assoc()){
//            foreach ($assoc as $key => $value) {
//            echo "<p>".$key.':'.$value."</p>";
//            }
//    }



//$result = $mysqli->query("SELECT * FROM vocabulary WHERE id = '2' ");

// if (  $result = $mysqli->query("SELECT * FROM vocabulary WHERE id = '2' ") ) {
// 	echo "This word already exist";   
// }

//    while ($assoc = $result->fetch_assoc()){
//            foreach ($assoc as $key => $value) {
//            echo "<p>".$key.':'.$value."</p>";
//            }
//    }

	if ($vocabulary !== '') {
		#echo 'real string';		
	}else{
		exit("no vocabulary");		
	}
	
	if ($result = $mysqli->query("SELECT * FROM vocabulary WHERE vocabulary ='$vocabulary'") ) {
	        
			if ($result->num_rows == 0) {
				//echo "no this word";

				$sql=" INSERT INTO `vocabulary` (`vocabulary`, `pronunciation`, `lookup`) 
			    VALUES ('$_POST[vocabulary]','$_POST[pronunciation]','1' ) ";

			    	if (!$mysqli->query($sql)) {
					  die('Error: ' . mysqli_error($mysqli));
					}else{
						echo 'add '.$_POST['vocabulary'].' '.$_POST['pronunciation'].', says the PHP file';
					}

			}elseif ($result->num_rows == 1) {
				echo "Update that word";				# code...
			}else{
				echo "This word already exist";   
			}

	}else{

		echo "no result";   


	}
	

	/*
	$sql=" INSERT INTO `vacabulary` (`vocabulary`, `pronunciation`, `lookup`, `lastCheck`) 
			   VALUES ('$_POST[vocabulary]','$_POST[pronunciation]','$_POST[client]','$_POST[description]' ) ";
		
	if (!$mysqli->query($sql)) {
	  die('Error: ' . mysqli_error($mysqli));
	}
	*/

	//echo 'Thank you '.$_POST['vocabulary'].' '.$_POST['pronunciation'].', says the PHP file';


?>
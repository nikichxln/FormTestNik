<?php
	session_start();
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Form</title>
	</head>

	<body>
		<?php if ( isset($_SESSION['auth']) && $_SESSION['auth'] ) { ?>
			<p>Саня хуй соси</p>
		<?php } else { ?>
			<form method="POST" action="form.php">
				<div class="form-group">
					<input type="text" name="name" placeholder="Имя" />
				</div>
				<div class="form-group">
					<input type="password" name="pass" placeholder="Пароль" />
				</div>
				<div class="form-group"><button type="submit">Войти</button></div>
			</form>
		<?php } ?>

	</body>
</html>
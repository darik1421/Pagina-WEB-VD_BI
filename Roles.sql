CREATE ROLE 'app_desarrollador','app_lee','app_modifica';

GRANT ALL ON variedadesduarte.* TO 'app_desarrollador';
GRANT SELECT ON variedadesduarte.* TO 'app_lee';
GRANT CREATE,INSERT,UPDATE, DELETE ON variedadesduarte.*TO 'app_modifica';

CREATE USER 'Devloper'@'localhost' IDENTIFIED BY 'dev2023';
CREATE USER 'Read'@'localhost' IDENTIFIED BY 'read2023';
CREATE USER 'Modifier'@'localhost' IDENTIFIED BY 'mod2023';
CREATE USER 'des1'@'localhost' IDENTIFIED BY 'des1pass';
GRANT process ON *.* TO 'des1'@'localhost';
SHOW GRANTS FOR 'des1'@'localhost';

GRANT 'app_desarrollador' TO 'Devloper'@'localhost';
GRANT 'app_lee' TO 'Read'@'localhost';
GRANT 'app_modifica' TO 'Modifier'@'localhost';

SHOW GRANTS FOR 'Devloper'@'localhost';
SHOW GRANTS FOR 'Devloper'@'localhost' USING 'app_desarrollador';

SET DEFAULT ROLE ALL TO
'Devloper'@'localhost',
'Read'@'localhost',
'Modifier'@'localhost';

SET GLOBAL log_bin_trust_function_creators = 1;

GRANT ALL PRIVILEGES ON variedadesduarte.* TO 'Devloper'@'localhost';
FLUSH PRIVILEGES;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'cris2004';
FLUSH PRIVILEGES;


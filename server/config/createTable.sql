CREATE TABLE IF NOT EXISTS `colors` (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    color VARCHAR(50) NOT NULL,
    hexcode VARCHAR(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8

INSERT INTO colors (color, hexcode)
VALUES ("red", "#ff0000"),
        ("orange", "#FFA500"),
        ("yellow", "#FFFF00"),
        ("green", "#00FF00"),
        ("blue", "#0000FF"),
        ("indigo", "#4B0082"),
        ("violet", "#8F00FF")



#error Table already exit --> Table 지울 것 : 
#DROP TABLE GaMap;   

#Table 생성(data, type, null값, default 설정)
CREATE TABLE GaMap (
    id INT NOT NULL AUTO_INCREMENT, #id 건물의 임시번호 자동으로 번호 메김
    name VARCHAR(10),
    locationX DECIMAL(18 , 10 ) Null,
    locationY DECIMAL(18 , 10 ) Null,
    grade VARCHAR(1) Null,
    content VARCHAR(100) default 'content',
    PRIMARY KEY (id)
)  ENGINE=MYISAM CHARSET=UTF8;

#Table 내림차순 정렬 - desc table명
#desc GaMap;

#Table 삽입 VALUES(id, name, locationX, locationY, grade, content)
INSERT INTO GaMap VALUES('1', '공학관', '37.886203', '127.735781', '5', '기타의견' );
INSERT INTO GaMap VALUES('2', '도서관', '37.884825', '127.737142', '5', '기타의견' );
INSERT INTO GaMap VALUES('3', 'CLC', '37.886652', '127.739954', '5', '기타의견' );

#Table 선택
select * from GaMap;

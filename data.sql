CREATE TABLE propertiess(
    id SERIAL PRIMARY KEY,
    name varchar(20) NOT NULL,
    location text NOT NULL,
    price INT NOT NULL,
    cashback INT NOT NULL,
    bhk INT NOT NULL,
    on_sale boolean NOT NULL,
    image BYTEA NOT NULL,
    image BYTEA NOT NULL
);
INSERT INTO propertiess(name, location, price, cashback, bhk, on_sale,image)
VALUES ('Godrej', 'Belathur Main Road, East Bangalore' , 89, 2, 3, TRUE,pg_read_binary_file('C:\Users\Ashish Pc\Desktop\website\client\my-app\src\routes\img\home1.jpeg')::bytea);
INSERT INTO propertiess( name, location, price, cashback, bhk, on_sale,image)
VALUES ('shama', 'faridabad' , 69, 1, 2, TRUE,pg_read_binary_file('C:\Users\Ashish Pc\Desktop\website\client\my-app\src\routes\img\home2.jpeg')::bytea);
INSERT INTO propertiess(name, location, price, cashback, bhk, on_sale,,image)
VALUES ('palm', 'Bangalore' , 120, 2, 4, TRUE,pg_read_binary_file('C:\Users\Ashish Pc\Desktop\website\client\my-app\src\routes\img\home3.jpeg')::bytea);
INSERT INTO propertiess(name, location, price, cashback, bhk, on_sale,image)
VALUES ( 'pan oasis', 'Noida' , 101, 1.5, 2, TRUE,pg_read_binary_file('C:\Users\Ashish Pc\Desktop\website\client\my-app\src\routes\img\home4.jpeg')::bytea);

CREATE TABLE reviewss (
    id INT AUTO_INCREMENT PRIMARY KEY,
    property_id BIGSERIAL REFERENCES properties(id),
    name varchar(20) NOT NULL,
    review text NOT NULL,
    rating INT NOT NULL CHECK(rating >=1 AND rating<=5) 
);
INSERT INTO reviewss( property_id, name, review, rating)
VALUES ( 1, 'Ashish ' , 'nice', 3);
INSERT INTO reviewss( property_id, name, review, rating)
VALUES ( 1, 'kartik ' , 'ok ok', 2);
INSERT INTO reviewss( property_id, name, review, rating)
VALUES ( 2, 'karal ' , 'poor', 1);
INSERT INTO reviewss( property_id, name, review, rating)
VALUES ( 2, 'devansh ' , 'bad', 2);
INSERT INTO reviewss( property_id, name, review, rating)
VALUES ( 2, 'qt ' , 'worst', 1);
INSERT INTO reviewss( property_id, name, review, rating)
VALUES ( 2, 'anubhav ' , 'nice', 3);
INSERT INTO reviewss( property_id, name, review, rating)
VALUES ( 3, 'bombay ' , 'very good', 3);
INSERT INTO reviewss( property_id, name, review, rating)
VALUES ( 3, 'chotu ' , 'excelent', 4);
INSERT INTO reviewss( property_id, name, review, rating)
VALUES ( 3, 'ram ' , 'mind blowing', 5);
INSERT INTO reviewss( property_id, name, review, rating)
VALUES ( 4, 'shivam ' , 'nice', 3);
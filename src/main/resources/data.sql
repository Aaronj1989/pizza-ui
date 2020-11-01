      
  INSERT INTO pizza(name,size, price) VALUES
  ('pepperoni','large',15.99),
  ('cheese','large',13.99),
  ('hawaiian','large',18.99),
  ('meatlovers','large',20.00),
  ('pepperoni','medium',8.99),
  ('cheese','medium',7.99),
  ('hawaiian','medium',13.99),
  ('meatlovers','medium',15.00);
  
  INSERT INTO orders(first_name,last_name,description, order_date, total) values
  ('bob','stevens', 'LG pizza peperoni(half:left), MD pizza mushroom + pepperoni, 
    8 wings bbq, large Sweet tea', '06/15/2020', 28.44),
  ('Janice','hoper', 'LG pizza veggie', '05/2/2020', 12.99),
  ('chris','Johnson', 'MD pizza veggie', '05/2/2020', 7.99);
  
  INSERT INTO toppings(name) VALUES 
  ('pepperoni'),
  ('italian sausage'),
  ('bacon'),
  ('mushroom'),
  ('onions'),
  ('ham'),
  ('pineapple');
  
  Insert INTO pizza_toppings(pizza_id,toppings_id) values
  (1,1),
  (3,6),
  (3,7),
  (4,1),
  (4,3),
  (4,6),
  (5,1),
  (7,6),
  (7,7),
  (8,1),
  (8,3),
  (8,6);
  
  INSERT INTO wings(pieces, price) VALUES 
  (6,7.99),
  (12,14.99),
  (18,20.99);
  
  INSERT INTO sides(name, price) VALUES 
  ('Breadsticks', 4.99),
  ('Salad',3.50);
  
  INSERT INTO drinks(name, size, price) VALUES
  ('Aquafina','20 oz', 1.99),
  ('Sweet tea','20 oz', 1.99),
  ('Baja Blast','20 oz', 1.99),
  ('Root Beer','20 oz', 1.99),
  ('Pepsi','20 oz', 1.99),
  ('Aquafina','1 Liter', 2.99),
  ('Sweet tea','1 Liter', 2.99),
  ('Baja Blast','1 Liter', 2.99),
  ('Root Beer','1 Liter', 2.99),
  ('Pepsi','1 Liter', 2.99);
  
  
  
                     
                     
                     
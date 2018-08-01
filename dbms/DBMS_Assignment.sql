/* Assignment 1  */
SELECT COUNT(*) AS Total_no_of_employee , MIN(moSalary) AS Minimum_moSalary, COUNT(DISTINCT ntLevel) AS Total_distinct_ntLevel 
FROM tblEmp

/* Assignment 2  */
SELECT E.[ntEmpID], E.[vcName],E.[vcMobieNumer] FROM tblEmp AS E

/* Assignment 3  */
SELECT * FROM tblEmp WHERE (vcMobieNumer IS NULL AND ntLevel=1) OR (vcMobieNumer IS NOT NULL AND ntLevel=0)

/* Assignment 4  */
SELECT * FROM tblEmp ORDER BY (CASE WHEN vcSkills LIKE 'JavaScript' THEN 1 ELSE 2 END)

/* Assignment 5  
    
    a. SELECT TOP(1) * FROM tblEmp 
    b. SELECT TOP(SELECT 3/2) * FROM tblEmp 
    c. SELECT TOP(1) PERCENT * FROM tblEmp
    d. SELECT TOP(1) WITH TIES * FROM tblEmp ORDER BY vcName


Ans:
    a.)The SQL statement selects the first/top  records from the "tblEmp" table
    b.)The SQL statement selects the first (3/2=1)  records from the "tblEmp" table
    c.)The SQL statement selects the first/top  1% record  from the "tblEmp" table
    d.)The SQL statement selects 2 (As vcName same in 2 rows)  records from the "tblEmp" table ties with the same vcName after ascending vcName 
	
*/

/* Assignment 6

When I executed this query:
           
   SELECT [vcName],[vcMobieNumer] FROM [dbo].[tblEmp] GROUP BY [vcName]
           
    I got following error message:
    Column 'dbo.tblEmp.vcMobieNumer' is invalid in the select list because it is not contained in either an aggregate function or the GROUP BY clause.

    Can you explain above error message? Write at least two possible solutions. 


Ans:

Expressions that are not encapsulated within an aggregate function and must be included in the GROUP BY Clause
at the end of the SQL statement.

Sol:
 
SELECT [vcName],[vcMobieNumer] FROM [dbo].[tblEmp] GROUP BY [vcName], [vcMobieNumer]

*/

/* Assignment 7  */
SELECT ntLevel FROM tblEmp WHERE moSalary>(SELECT AVG(moSalary) FROM tblEmp)


/* Assignment 8  */
SELECT COUNT(*) AS Employees_With_Valid_Suffix FROM Person.Person WHERE Suffix IS NOT NULL


use AdventureWorks2012;

/* Assignment 9  */
SELECT (ISNULL(p.FirstName,'') +' '+ ISNULL(p.MiddleName,'') +' '+ ISNULL(p.LastName,''))  AS FullName FROM
(((Person.Address AS a 
INNER JOIN Person.StateProvince AS sp ON  a.StateProvinceID=sp.StateProvinceID)
INNER JOIN Person.BusinessEntityAddress AS bea ON bea.AddressID=a.AddressID)
INNER JOIN Person.Person AS p ON p.BusinessEntityID = bea.BusinessEntityID)
WHERE sp.Name='Florida'

/* Assignment 10  */
SELECT sod.SalesOrderID, AVG(soh.SubTotal) AS Subtotal1, SUM(sod.OrderQty * sod.UnitPrice) AS Subtotal2 
FROM Sales.SalesOrderDetail AS sod 
INNER JOIN Sales.SalesOrderHeader AS soh
ON soh.SalesOrderID=sod.SalesOrderID GROUP BY sod.SalesOrderID


SELECT sod.SalesOrderID, soh.SubTotal AS Subtotal1, SUM(sod.OrderQty * sod.UnitPrice) AS Subtotal2 
FROM Sales.SalesOrderDetail AS sod 
INNER JOIN Sales.SalesOrderHeader AS soh
ON soh.SalesOrderID=sod.SalesOrderID GROUP BY sod.SalesOrderID, soh.SubTotal 


/* Assignment 11  */
SELECT SalesOrderID, UnitPrice FROM Sales.SalesOrderDetail WHERE OrderQty=1;

/* Assignment 12  */
SELECT pd.Description FROM
((Production.ProductDescription AS pd 
INNER JOIN Production.ProductModelProductDescriptionCulture AS pmpdc ON pd.ProductDescriptionID=pmpdc.ProductDescriptionID)
INNER JOIN Production.Product AS pp ON pmpdc.ProductModelID=pp.ProductModelID)
WHERE pmpdc.CultureID='fr' and pp.ProductID=736

/* Assignment 13  */
SELECT sod.OrderQty, p.Name, p.ListPrice FROM
((Sales.SalesOrderHeader AS soh 
INNER JOIN Sales.SalesOrderDetail AS sod ON soh.SalesOrderID=sod.SalesOrderID)
INNER JOIN Production.Product AS p ON sod.ProductID=p.ProductID)
WHERE soh.CustomerID=635

/* Assignment 14  */
SELECT SUM(sod.OrderQty) AS Total_Order FROM
(((( Sales.SalesOrderHeader AS soh 
INNER JOIN Person.Address AS a ON soh.ShipToAddressID= a.AddressID)
INNER JOIN Sales.SalesOrderDetail AS sod ON sod.SalesOrderID=soh.SalesOrderID)
INNER JOIN Production.Product AS p ON p.ProductID=sod.ProductID)
INNER JOIN Production.ProductSubcategory AS ps ON ps.ProductSubcategoryID=p.ProductSubcategoryID)
WHERE a.City='London' and ps.Name='Cranksets'

/* Assignment 15 


Describe Char, Varchar and NVarChar datatypes with examples.

ANS:

CHAR data type: synonym for character

1) It is a fixed length data type
2) Used to store non-Unicode characters
3) Occupiers 1 byte of space for each character

If the value provided to a variable of CHAR data type is shorter than the length of a column of declared the size 
of the variable, then the value would be right-padded with blanks to match the size of column length. 

VARCHAR data type: synonym for character varying

1) It is a variable length data type
2) Used to store non-Unicode characters
3) Occupies 1 byte of space for each character


NVarChar data type: synonym for national char varying and national character varying

1) It is a variable-length data type
2) Used to store Unicode characters
3) Occupies 2 bytes of space for each character


CREATE TABLE myTable(
	fName CHAR (10),
	mName VARCHAR(10),
	lName NVARCHAR(10)	
);

INSERT INTO myTable VALUES("Nitin", "Kumar","UNICODE STRING");

 */
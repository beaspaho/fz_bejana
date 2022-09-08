

create table tbl_bs_csv(
tb_EUR VARCHAR2(5) DEFAULT 'EUR',
tb_name varchar2(11),
tb_val VARCHAR2(15)
);
--kemi krijuar tabelen ku do te mbajme fushat
--new table which is going to store the info we retrive from file

create or replace directory BS_NEW_Directory as '/home/oracle/bea_new_path/';
--dir creation
CREATE OR REPLACE PROCEDURE pr_csv_bea_fcust IS--creation of the procedure
BEGIN

DECLARE
--we create and store some vars which is going to store the info from the docs
--each vaR represents a field
 F  UTL_FILE.FILE_TYPE;
  l_V_LINE VARCHAR2 (10000);
  l_V_EUR VARCHAR2 (15) DEFAULT 'EUR';
   l_V_EMPNO VARCHAR2(1000);
      l_V_ENAME VARCHAR2(15);
 BEGIN
   --checking if the file is open
    F := UTL_FILE.FOPEN('BS_NEW_DIRECTORY', 'DETYRA.CVS.csv','R');
        IF UTL_FILE.IS_OPEN(F) THEN
          --since there are many recs we start by retriving info inside a loop
     LOOP
       BEGIN
          UTL_FILE.GET_LINE(F, l_V_LINE, 1000);
         IF l_V_LINE IS NULL THEN
            EXIT;
          END IF;
        l_V_EUR := REGEXP_SUBSTR(l_V_LINE, '[^,]+', 1, 1);--we check for the case when the curr is not the standard one for that we use length fks
          IF LENGTH(l_V_EUR) > 3 THEN
              l_V_EUR   := 'USD';
              ELSE
                   l_V_EUR   := 'EUR';
              END IF;

          l_V_EMPNO := REGEXP_SUBSTR(l_V_LINE, '[^,]+', 1, 1);
         l_V_ENAME := REGEXP_SUBSTR(l_V_LINE, '[^,]+', 1, 2);
         --after retriving info from the file we insert it inside the table we created

          INSERT INTO tbl_bs_csv VALUES(l_V_EUR,l_V_EMPNO, l_V_ENAME);
        COMMIT;
       EXCEPTION  --in other case there is no data
         WHEN NO_DATA_FOUND THEN
         EXIT;
        END;
      END LOOP;
    END IF;   UTL_FILE.FCLOSE(F);--making sure we closed the file
  END;
  END;

  BEGIN 
   pr_csv_bea_fcust;
    END;
     SELECT * FROM tbl_bs_csv;

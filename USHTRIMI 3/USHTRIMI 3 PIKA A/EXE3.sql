 declare 
    new_date date;
    n varchar2 (10000);
    n1 varchar2(10000);
    rez boolean;
    begin 
          new_date  := TO_DATE('&new_dt', 'DD-MON-YYYY');
      n := null;
    n1 := null;
       rez := bs_isHoll(new_date,-5,n,n1);
          dbms_output.put_line('rez 0 do te thote nuk eshte pushim per daten aktuale, kurse 1 eshte'); 
        dbms_output.put_line(sys.diutil.bool_to_int(rez));
      
    
      end; 

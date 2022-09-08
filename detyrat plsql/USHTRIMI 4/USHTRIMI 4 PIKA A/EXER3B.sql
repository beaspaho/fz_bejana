  declare 
    
    n varchar2 (5);
    n1 varchar2(5);
    rez NUMBER;
    begin 
       n := 'USD';
       n1 := 'EUR';
    
        rez:= FN_BS_P_MID_RATE112('000',n,n1);
        dbms_output.put_line( ' KURSI FINAL  ' || rez);
      
    
      end; 

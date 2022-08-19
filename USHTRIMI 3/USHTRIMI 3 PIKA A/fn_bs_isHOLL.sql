
create or replace function fn_bs_isHOLL (p_myDay date,p_n NUMBER,p_l_HorW OUT VARCHAR2,p_err OUT VARCHAR2) return boolean is
--ky funksion mp_err nje date nga useri dhe kontrollon nqs ajo date gjendet ne tabele/ we are checking if the date is a valid value for our table
--if it is we check if it is holiday or no
-- than we have another number and based in its sign we check how many days in this interval have been holiday
  p_result BOOLEAN;
    l_f_md DATE := p_myDay;--var for date
  l_n NUMBER:= p_n;--hold the parameter
  l_HorW VARCHAR2(1);-- stores the info from the table
  l_mm NUMBER(2);--month
  l_yy NUMBER(4) ;--year
  l_new_date DATE;--date after we have al_dded or substracted the days
  l_dd NUMBER(2);--days
  is_line VARCHAR2(31);--store the field for day status
  counter number := 0;
  begin
    --since the info from our date is divided in different cols in  our tables we need to extract the neccessary info in different vars
l_new_date := p_myDay;
l_mm :=EXTRACT(MONTH FROM l_new_date);
  l_yy :=EXTRACT(YEAR FROM l_new_date);
l_dd :=EXTRACT(DAY FROM l_new_date);

           SELECT STTMS_LCL_HOLIDAY.HOLIDAY_LIST
            INTO is_line
            FROM STTMS_LCL_HOLIDAY
            WHERE STTMS_LCL_HOLIDAY.YEAR = l_yy AND STTMS_LCL_HOLIDAY.MONTH= l_mm;
           -- ky variabel kontrollon ditet n para ose pas dates tone dhe ne llogarisim sesa dite pushim kane qene plus ne dates tone ose minus dates sone ne varesi te n
           -- gjithashtu kontrollojme nese data jone eshte apo jo pushim
            if l_n < 0   then-- the case when we need to substract the days
              for i in 1.. length (is_line) loop
               if i = l_dd then-- check our date status
                    l_HorW:=SUBSTR(is_line, i, 1);
                  if (  l_HorW = 'H') then p_result := true;
                  for p in (l_dd+l_n)..l_dd loop
                    l_HorW:=SUBSTR(is_line, p, 1);
                  if (l_HorW = 'H') then
                  counter := counter + 1;--calculate the number of days that are holiday before our date
                  p_err := 'ka gjithssej dite pushimi te meparshme.';
                  dbms_output.put_line(p_err || cOUNTER);
                  end if;
                  end loop;
                  else
               p_result := false;
                 p_err := ' nuk eshte dite pushimi';
                  for p in(l_dd + l_n)..l_dd loop
                    l_HorW:=SUBSTR(is_line, p, 1);
                  if (l_HorW = 'H') then
                  counter := counter + 1;
                  p_err := 'ka gjithssej dite pushimi te meparshme.';
                  dbms_output.put_line(p_err || cOUNTER);end if;
                  end loop;
                 end if;
                 end if;
                 end loop;
                 else --next case/ same logic
                       for i in length (is_line)..30 loop
                          if i = l_dd then
                  l_HorW:=SUBSTR(is_line, i, 1);
                  for p in l_dd..(l_dd+l_n) loop
                    l_HorW:=SUBSTR(is_line, p, 1);
                  if (l_HorW = 'H') then
                  counter := counter + 1;
                  p_err := 'ka gjithssej dite pushimi te meparshme.';
                  dbms_output.put_line(p_err || cOUNTER); end if;
                  end loop;
                  else
               p_result := false;
                 p_err := ' nuk eshte dite pushimi';
                  for p in l_dd..(l_dd+l_n)  loop
                    l_HorW:=SUBSTR(is_line, p, 1);
                  if (l_HorW = 'H') then
                  counter := counter + 1;
                  p_err := 'ka gjithssej dite pushimi te meparshme.';
                  dbms_output.put_line(p_err || cOUNTER); end if;
                  end loop;
                 end if;

                 end loop;
                 end if;
                 return p_result;
                  exception
  when others then
     dbms_output.put_line(' errOR');


    end fn_bs_isHoll;

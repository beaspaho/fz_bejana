CREATE OR REPLACE FUNCTION FN_BS_CONVERT_FCUST(P_CURR_CONVERT IN VARCHAR2, P_QUAN1 IN NUMBER,p_br in varchar2,p_CURR_FINAL IN VARCHAR2) RETURN NUMBER IS P_TOT1 NUMBER;
--FUNCTION HAS 4 PARAMETERS: CURR WHICH WE WANT TO CONVERT
--QUANTITY, BRANCH AND THE FINAL CURR.
--IT RETURNS THE NEW  CONVERTED AMOUNT
L_TOTAL NUMBER;--VAR FOR FINAL SUM
L_dec1 number (1);-- VAR FOR ROUNDING FORMAT
     l_rate number;--THE RATE WE NEED FOR CONVERTING
 L_ccy1 varchar2  (5);--TEMP VAR
 L_ccy2 varchar2  (5);--TEMP VAR
begin
  --llogaritja e mid rate:/ MID RATE CALCULATION
  --FILLOJME DUKE MARR NGA TABELA VLEREN PER KONVERTIM NE BAZE TE MONEDHES- WE RETRIVE THE NECESSARY INFO FROM TABLE
 select DISTINCT CCY_DECIMALS into L_dec1 from CYTMS_CCY_DEFN_MASTER  where CCY_CODE=p_CURR_FINAL;
   L_ccy1 := P_CURR_CONVERT;
 L_ccy2 := p_CURR_FINAL;
--PERDORIM FUNKSIONIN E GATSHEM QE KEMI PER TE RUAJTUR DHE LLOGARITUR MID RATE/
--STORING RATE IN THE VAR BY USING OUR PREVIOUS FUNCTION
    l_rate:=BS_FN_RATE(p_br, L_ccy1, L_ccy2);
        dbms_output.put_line('RATE'|| L_RATE);
        
      
--llogaritja  e vleres/ CALCULATION OF THE AMOUNT
  L_TOTAL := l_rate *  P_QUAN1;


 --rrumbullakimi/ROUNDING THE RESULT BASED ON THE CURR WE ARE WORKING

   P_TOT1:=ROUND (L_TOTAL, L_dec1);

return P_TOT1;
 exception
  when others then
     dbms_output.put_line('KUJDES ME KALIMIN E VLERAVE');
     return 0;
end ;

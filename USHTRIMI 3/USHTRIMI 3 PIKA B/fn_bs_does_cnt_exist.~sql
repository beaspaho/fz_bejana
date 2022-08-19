create or replace function fn_bs_does_cnt_exist (p_udf_name1 in varchar2, p_udf1 in varchar2,p_mod1 in varchar2) return varchar2 is p_result varchar2(2);
--ky funksion synon te kontrolloje nqs ekziston apo jo fusha e kerkuar 
--we declare these vars in order to mantein the necessary values and use it to check the conditions we need/var gjendjeje
l_udf varchar2(220);
l_pudf varchar2(230);
p_mod varchar2(220);
l_n number;
l_n1 number;
begin
--field num is going to help us to check if our contract is in the corrensponding fields in the next table 
--we store the neccessary info and then we check
           SELECT cstm_product_udf_fields_map.field_num
            INTO l_n1
            FROM cstm_product_udf_fields_map
            WHERE  cstm_product_udf_fields_map.field_name = p_udf_name1;
l_pudf:='FIELD_VAL_'||l_n1;

dbms_output.put_line(l_pudf);
dbms_output.put_line( p_udf1);

       EXECUTE IMMEDIATE 'select count(*)  from cstm_contract_userdef_fields where '||l_pudf||'='''||p_udf1||'''  and module =''' || p_mod1  ||''' ' into l_n;

  if l_n> 0 then
    --if there are rec this means we have found our data 
    --ka rec
    dbms_output.put_line('ka kontrate.');
    p_result:='Y';
  else
    -- nuk ka rec
    dbms_output.put_line('nuk ka kontrate.');
    p_result:='N';
  end if;
  RETURN  p_result;
  end;

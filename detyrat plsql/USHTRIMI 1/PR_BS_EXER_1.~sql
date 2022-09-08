create or replace directory BS_NEW_DIRE as '/home/oracle/bea_new_path/';--DIR NGA KU MARRIM INFON
create or replace procedure PR_BS_EXER_1 is
begin --PROCEDURA
  insert into TB_bs_test_ex (TB_id, TB_xml_dat) values (' 1 ', XMLTYPE( bfilename('BS_NEW_DIR', 'usht.xml'),--KALOJME INFON E DOC NE TABELEN TONE
 nls_charset_id ('AL32UTF8')));
 INSERT INTO TB_BEA_TEST_1ex

select   B.*--INFON E MARR NE TABELEN TEMP E NDAJME NE TABELEN QE NA DUHET-FINALE DUKE LEXUAR PATH SI PER TABELE -SI PER FUSHE
from TB_bs_test_ex X ,
XMLTABLE ('/Msg/Docs/Doc/Cctinit/Document/CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf'
PASSING  X.TB_XML_DAT
 COLUMNS

"ENDtoEND" VARCHAR2 (30) PATH 'PmtId/EndToEndId',
"AMT" VARCHAR2(5 BYTE) PATH  'Amt/InstdAmt' ,
"CCY" VARCHAR2(5 BYTE) PATH  'Amt/InstdAmt/@Ccy',
"IBAN" VARCHAR2(30 BYTE) PATH  'CdtrAcct/Id/IBAN',
 "BIC" VARCHAR2(30 BYTE) PATH  'CdtrAgt/FinInstnId/BIC') B;

  end;

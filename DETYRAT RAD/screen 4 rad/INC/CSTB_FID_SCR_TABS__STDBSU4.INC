DELETE CSTB_FID_SCR_TABS A  WHERE A.FUNCTION_ID = 'STDBSU4' ;
INSERT INTO CSTB_FID_SCR_TABS(FUNCTION_ID,SCREEN_NAME,SCREEN_PORTION,TAB_NAME,TAB_LABEL) VALUES(
'STDBSU4',
'CVS_SCREEN',
'HEADER',
'TAB_HEADER',
NULL);
INSERT INTO CSTB_FID_SCR_TABS(FUNCTION_ID,SCREEN_NAME,SCREEN_PORTION,TAB_NAME,TAB_LABEL) VALUES(
'STDBSU4',
'CVS_SCREEN',
'BODY',
'TAB_MAIN',
'Main');
INSERT INTO CSTB_FID_SCR_TABS(FUNCTION_ID,SCREEN_NAME,SCREEN_PORTION,TAB_NAME,TAB_LABEL) VALUES(
'STDBSU4',
'CVS_SCREEN',
'BODY',
'TAB_DETAIL',
'Detail');
INSERT INTO CSTB_FID_SCR_TABS(FUNCTION_ID,SCREEN_NAME,SCREEN_PORTION,TAB_NAME,TAB_LABEL) VALUES(
'STDBSU4',
'CVS_SCREEN',
'FOOTER',
'TAB_FOOTER',
NULL);
COMMIT;
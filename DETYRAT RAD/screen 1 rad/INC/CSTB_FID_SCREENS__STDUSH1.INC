DELETE CSTB_FID_SCREENS A  WHERE A.FUNCTION_ID = 'STDUSH1' ;
INSERT INTO CSTB_FID_SCREENS(FUNCTION_ID,SCREEN_NAME,SCREEN_LABEL,MAIN_SCREEN,SCREEN_SIZE,EXIT_BUTTON_TYPE,SCREEN_ARGS,TAB_COUNTS) VALUES(
'STDUSH1',
'CVS_SS',
NULL,
'Y',
'SMALL',
'1',
NULL,
NULL);
COMMIT;
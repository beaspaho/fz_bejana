DELETE CSTB_FID_DATA_SOURCES A  WHERE A.FUNCTION_ID = 'STDUSH2' ;
INSERT INTO CSTB_FID_DATA_SOURCES(FUNCTION_ID,NODE_NAME,NODE_NO,TABLE_NAME,NODE_TYPE,NODE_MANDATORY,PARENT_NODE,RELATION_WITH_PARENT,REL_TYPE,MULTI_RECORD,PK_COLS,PK_TYPES,COLUMN_NAME_LIST,COLUMN_NAME_LIST_1) VALUES(
'STDUSH2',
'STTM_DETAIL_SUSHT3',
1,
'STTM_DETAIL_SUSHT3',
'NORMAL',
'N',
'STTM_MASTER_SUSHT2',
'STTM_MASTER_SUSHT2.RELATIONSHIP=STTM_DETAIL_SUSHT3.RELATIONSHIP AND STTM_MASTER_SUSHT2.CATEGORY_EX =STTM_DETAIL_SUSHT3.CATEGORY_EX ',
'N',
'Y',
'RELATIONSHIP~CATEGORY_EX~PROD_CODE',
'VARCHAR2~VARCHAR2~VARCHAR2',
'CATEGORY_EX~PROD_CODE~RELATIONSHIP~',
NULL);
INSERT INTO CSTB_FID_DATA_SOURCES(FUNCTION_ID,NODE_NAME,NODE_NO,TABLE_NAME,NODE_TYPE,NODE_MANDATORY,PARENT_NODE,RELATION_WITH_PARENT,REL_TYPE,MULTI_RECORD,PK_COLS,PK_TYPES,COLUMN_NAME_LIST,COLUMN_NAME_LIST_1) VALUES(
'STDUSH2',
'STTM_MASTER_SUSHT2',
2,
'STTM_MASTER_SUSHT2',
'NORMAL',
'N',
NULL,
NULL,
'1',
'N',
'RELATIONSHIP~CATEGORY_EX',
'VARCHAR2~VARCHAR2',
'CATEGORY_EX~DESCRIPTION_EX~GROUP_STATUS~PROD_RESTRICTION~RELATIONSHIP~MAKER_ID~MAKER_DT_STAMP~CHECKER_ID~CHECKER_DT_STAMP~MOD_NO~RECORD_STAT~AUTH_STAT~ONCE_AUTH~',
NULL);
COMMIT;
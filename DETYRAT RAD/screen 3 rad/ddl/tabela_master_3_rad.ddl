create TABLE STTM_MASTER_SUS3 
(
CUST_ID varchar2(35),
CUST_TYPE varchar2(35),
CUST_CAT varchar2(55),

AUTH_STAT CHAR(1) DEFAULT 'U',
RECORD_STAT CHAR(1) DEFAULT 'U',
MOD_NO NUMBER (4,0),
CHECKER_DT_STAMP DATE,
ONCE_AUTH CHAR(1)  DEFAULT 'N',
MAKER_ID VARCHAR2(12),
MAKER_DT_STAMP  DATE,
CHECKER_ID VARCHAR2(12),
CONSTRAINT PX_STTM_MASTER_SUS3   PRIMARY KEY (CUST_ID)

);

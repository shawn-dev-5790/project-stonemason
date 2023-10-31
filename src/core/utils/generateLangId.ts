export {};

class LanguageIdManager {}

class LanguageId {}

const langId = {
  nation: "KR",
  key: "alimtalk",
  value: "",
  createdAt: "",
  updatedAt: "",
};

/**
 * 구분 xx_xx 띄어쓰기 xx-xx
 *
 * create_key_rules
 * 
 * domain :
 *
 * role :  section | table | box | dialog | tooltip | toast | btn
 * action : create | read | update | delete | copy | download
 * type : txt | num | dtm :=x (tit | desc | msg | placeholder | url | id | sub-tit )
 * name :
 *
 *
 * {domain}.{role}.{type}.{name_ad}
 *
 * page_txt_title
 * page_txt_desc
 * 
 * page_dtm_created
 * page_dtm_updated
 * 
 * dialog_txt_title
 * dialog_txt_desc
 * dialog-txt-create_btn
 * 
 * tooltip_txt_create-btn
 * tooltip_txt_not-allow-viewer
 * 
 * toast_txt_create-btn-success
 * toast_txt_create-btn-error
 * 
 * 
 * IDM.domain('sdfkasdjf').tooltip.name('daskjflaj')
 */

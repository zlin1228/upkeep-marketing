export const getYoastTitle = (yTitle, title, pageType) => {
    if(yTitle){
        return yTitle?.replace('%%sitename%%', `${pageType || ''}`)
        .replace('%%sep%%%', ' - ')
        .replace('%%title%%', `${title || ''}`)
        .replace('%%page%%', '')
        .replace('%%primary_category%%', '')
        .replace('&#8217;', '\'')
        .replace('&#8211;', '-')
        .replace('&#039;', '\'')
        .replace('&#038;', '&')
    } else return null;
}
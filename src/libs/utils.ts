class Utils {
  /**
  Función row retornar un elemento en la posición x 
  si no se le pasa la posición por defecto mola el elemento 0
 * @param <Array> items required
 * @param <number> position optional default 0
 */

  static row = (items: Array<[]>, position?: number) => {
    let item: any;
    if (Array.isArray(items)) {
      position = position ? position : 0;
      item = items[position];
    }
    return item;
  };


  static queryCustomers = (defaultFields: Array<any>, customers: Array<any>, t: any, campaig: any) => {
    let querys: any = [];
    const query = (row: any) => {
      let fields = "campaig_id,";
      let values: any = `${campaig.campaig_id},`;
      for (const filed of defaultFields) {
        for (let key in row) {
          if (filed.name_e === key || filed.name_s === key) {
            if (filed.type) { }
            fields += `${filed.name_e},`
            values += `'${row[key]}',`
          }
        }
      }
      fields = fields.substring(0, fields.length - 1);
      values = values.substring(0, values.length - 1);
      return { fields, values }
    };
    if (Array.isArray(defaultFields) && Array.isArray(customers)) {
      for (let row of customers) {
        let result = query(row)
        querys.push(t.result(`INSERT INTO customers(${result.fields}) VALUES (${result.values})`))
        
      }
    }
    return querys
  };

  static getCategorys = async (items: Array<[]>) => {
    let categotys: Array<string> = []
    if (!Array.isArray(items)) {
      return categotys;
    }
    const result = await Utils.row(items);
    if (result.values && Array.isArray(result.values)) {
      const { path_from_root } = await Utils.row(result.values)
      categotys = path_from_root ? path_from_root.map((item: any) => item.name) : []
    }
    return categotys;
  };

  static getAutor = (cookies: any) => {
    if (!cookies.autor) {
      return { name: '', lastname: '' }
    }
    return JSON.parse(cookies.autor)
  };

  
 }




 


export { Utils };
 


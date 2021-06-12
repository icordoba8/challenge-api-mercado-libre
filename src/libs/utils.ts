class Utils {
  /**
  Función row retornar un elemento en la posición x 
  si no se le pasa la posición por defecto mola el elemento 0
 * @param <Array> items required
 * @param <number> position optional default 0
 */

  static row = (items: Array<any>, position?: number) => {
    let item:any= {};
    if(Array.isArray(items)) {
      position = position ? position : 0;
      if(typeof items[position] === "object") {
          item = items[position];
      }
    }
    return item;
  };

  static getCategorys = async (items: Array<any>) => {
    let categotys: Array<string> = []
    if (!Array.isArray(items)) {
      return categotys;
    }
    const result = await Utils.row(items);
    if(typeof result === 'object'  && Array.isArray(result.values)) {
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
 


import {Cell,Field,Coords,CellState} from "./Field"

//Coords是坐标

export const getNeigboursItems=([y,x]:Coords):Record<string,[number,number]>=>{
  return {
  top:[y-1,x],
  topRight:[y-1,x+1],
  right:[y,x+1],
  rightBottom:[y+1,x+1],
  bottom:[y+1,x],
  bottomLeft:[y+1,x-1],
  left:[y,x-1],
  leftTop:[y-1,x-1]
  }
}

/**
 * Check item in the field
 * @param {Coords} coords
 * @param {Field} field
 * @returns {boolean}
 */
export const checkItemInField=([y,x]:Coords,{length}:Field):boolean=>(
  y>=0 && x>=0 && x<length && y<length
)


/**
 * Increment neighbour items for cell with coords
 * meet bomb dont't increated
 * @param {Coords} coords
 * @param {Field} field
 * @returns {Cell}
 */

export const incrementNeighbours=(coords:Coords,field:Field):Field=>{
  const items=getNeigboursItems(coords)
  for(const [y,x] of Object.values(items)){
    if(checkItemInField([y,x],field)){
    const cell=field[y][x]
    if(cell<CellState.bomb-1){
       field[y][x]=(cell + 1) as Cell

    }

    }
  }
  return field
}
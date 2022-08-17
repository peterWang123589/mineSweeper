import {emptyFieldGenerator,CellState,fieldGenerator,Cell} from "./Field"
const {empty,bomb,hidden}=CellState
const cellWithBombFilter = (cell: Cell) => cell === bomb;
describe("Field Generator",()=>{
  describe("emptyFieldGenerator tests",()=>{
    it("2 x 2 squares with default empty",()=>{
      expect(emptyFieldGenerator(2)).toStrictEqual([
        [empty,empty],
        [empty,empty]
      ])
    })
    it("3 x 3 squares with bomb",()=>{
      expect(emptyFieldGenerator(3,bomb)).toStrictEqual([
        [bomb,bomb,bomb],
        [bomb,bomb,bomb],
        [bomb,bomb,bomb],

      ])
    })
    it("4 x 4 squares with hidden",()=>{
      expect(emptyFieldGenerator(4,hidden)).toStrictEqual([
        [hidden,hidden,hidden,hidden],
        [hidden,hidden,hidden,hidden],
        [hidden,hidden,hidden,hidden],
        [hidden,hidden,hidden,hidden],
      ])
    })
  })

  describe("Simple Cases",()=>{
    it("Wrong dencity",()=>{
      const errText="Probability must be between 0 and 1"
      expect(()=>fieldGenerator(1,-1)).toThrow(errText)
      expect(()=>fieldGenerator(1,2)).toThrow(errText)
    })
   
    it('smallest possible field without mine',()=>{
      expect(fieldGenerator(1,0)).toStrictEqual([[empty]])
    })
    
    it("Big field 10 * 10 without mine",()=>{
      expect(fieldGenerator(10,0)).toStrictEqual([
        [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
      ])
    })
    it('2x2 field with 50% probability', () => {
      const field = fieldGenerator(2, 0.5);
      const flatField = field.flat();

      const cellsWithBombs = flatField.filter(cellWithBombFilter);
      const emptyCells = flatField.filter((cell: Cell) => cell === 2);

      expect(cellsWithBombs).toHaveLength(2);
      expect(emptyCells).toHaveLength(2);
    });
    it('Real game field size = 10x10 with 1/4 mined cells (25 mines)', () => {
      const size = 10;
      const mines = 25;

      const probability = mines / (size * size);
      const field = fieldGenerator(size, probability);
      // console.table(field)
      const flatField = field.flat();
       console.log([...field[0], ...field[1]].join(''))
      expect([...field[0], ...field[1]].join('')).not.toBe(
        '99999999999999999999'
      );

      expect(flatField.filter(cellWithBombFilter)).toHaveLength(mines);
    });

  })
})
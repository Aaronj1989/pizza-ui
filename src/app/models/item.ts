export class Item {
	
	private _name;

	private _totalPrice;
  
	private _basePrice;
 
	private _description;
 
	private _quantity;
    
	private _img;
    
	constructor(name: string, totalPrice:number, basePrice:number, description, quantity: number,img:string){ 
		this._name = name;
		this._totalPrice = totalPrice;
		this._basePrice = basePrice;
		this._description = description;
		this._quantity = quantity;
		this._img = img;
	}
	
	public set img(value) {
        this._img = value;
    }
    public get img() {
        return this._img;
    }
public set quantity(value) {
        this._quantity = value;
    }
    public get quantity() {
        return this._quantity;
    }
	
	   public set description(value) {
        this._description = value;
    }
    public get description() {
        return this._description;
    }

   public set basePrice(value) {
        this._basePrice = value;
    }
    public get basePrice() {
        return this._basePrice;
    }
  public set totalPrice(value) {
        this._totalPrice = value;
    }
    public get totalPrice() {
        return this._totalPrice;
    }
    public set name(value) {
        this._name = value;
    }
    public get name() {
        return this._name;
    }
}

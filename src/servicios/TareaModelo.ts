export class TareaModelo
{
  toLowerCase:any;
  constructor (
    public descripcion:string,
    public importante:boolean = false,
    public realizada:boolean = false
  ){}
}
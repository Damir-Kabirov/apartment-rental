export enum ApiRout {
  Root = '/',
  Auth = '/auth',
  Property = '/property',
  Main = 'main/:city',
  Fovorit = 'fovorit/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

type propertyImage = {
  id:number;
  url:string;
}
export const propertyImage : propertyImage[] = [
  {id:1,url:'img/room.jpg'},
  {id:2,url:'img/apartment-01.jpg'},
  {id:3,url:'img/apartment-02.jpg'},
  {id:4,url:'img/apartment-03.jpg'},
  {id:5,url:'img/studio-01.jpg'},
  {id:6,url:'img/apartment-01.jpg'},
];

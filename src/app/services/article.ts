export class Article {
    id!:String;
    titre!:String;
    description!:String;
    marque!:String;
    etat!:String;
    prix!:String;
    echange!:String;
    createdAt!:Date;
    image!:[{
        path: String
    }];
    color!:[];
}

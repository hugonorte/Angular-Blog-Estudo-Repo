export interface Post {
  id: number;
  imagePath: string;
  category: string;
  title: string;
  ingredients: string[];
  preparationMode: string;
}

export const POSTS_DATA: Post[] = [
  {
    id: 1,
    imagePath: 'assets/images/pasta_dish_1791574462449.jpg',
    category: 'Massas',
    title: 'Macarrão Artesanal',
    ingredients: [
      '400g de farinha de trigo tipo 00',
      '4 ovos frescos',
      '1 pitada de sal',
      '2 colheres de sopa de azeite de oliva extravirgem',
      'Molho de tomate caseiro a gosto',
      'Folhas de manjericão fresco e queijo parmesão ralado'
    ],
    preparationMode: 'Despeje a farinha em uma bancada limpa e faça uma cova no centro. Adicione os ovos, o sal e o azeite. Misture aos poucos com um garfo puxando a farinha das bordas para o centro até formar uma massa homogênea. Sove vigorosamente por cerca de 10 minutos até que fique lisa e elástica. Deixe descansar coberta com filme plástico por 30 minutos. Abra a massa com um rolo ou máquina de macarrão na espessura desejada e corte no formato escolhido. Cozinhe em água abundante fervente com sal por 2 a 4 minutos. Sirva com molho aquecido e folhas frescas de manjericão.'
  },
  {
    id: 2,
    imagePath: 'assets/images/burger_dish_1791574472174.jpg',
    category: 'Sanduíches',
    title: 'Hambúrguer Gourmet',
    ingredients: [
      '360g de blend de carne bovina (acém e peito bovino moídos)',
      '2 pães tipo brioche para hambúrguer',
      '4 fatias de queijo cheddar inglês ou prato',
      '4 tiras de bacon crocante',
      'Folhas de alface americana e rodelas de tomate fresco',
      'Maionese temperada artesanal',
      'Sal e pimenta-do-reino moída na hora a gosto'
    ],
    preparationMode: 'Molde a carne em dois discos de 180g sem compactar demais. Aqueça uma chapa ou frigideira de fundo grosso em fogo alto. Tempere os hambúrgueres com sal e pimenta apenas momentos antes de colocar na chapa quente. Sele por cerca de 3 a 4 minutos de um lado, vire e cubra com as fatias de queijo, abafando até derreter. Toste levemente os pães na manteiga. Monte espalhando a maionese nas bases dos pães, adicione a alface, as rodelas de tomate, o hambúrguer suculento com o queijo derretido, as fatias de bacon e feche.'
  },
  {
    id: 3,
    imagePath: 'assets/images/pizza_dish_1791574481524.jpg',
    category: 'Pizzas',
    title: 'Pizza Napolitana',
    ingredients: [
      '500g de farinha de trigo de alta força',
      '325ml de água gelada',
      '15g de sal refinado',
      '2g de fermento biológico seco',
      '200g de queijo mussarela de búfala fresca',
      '200g de molho de tomate pelado triturado à mão',
      'Folhas de manjericão fresco e azeite extravirgem'
    ],
    preparationMode: 'Dissolva o fermento na água e vá incorporando a farinha aos poucos em uma tigela grande. Acrescente o sal e sove até obter uma massa macia e homogênea. Deixe fermentar em recipiente fechado por 24 a 48 horas sob refrigeração. Divida a massa em bolas e deixe atingir a temperatura ambiente por 2 horas antes de assar. Abra os discos manualmente, preservando as bordas aeradas. Espalhe uma camada fina de molho de tomate, distribua a mussarela despedaçada e asse em forno bem pré-aquecido na temperatura máxima possível. Finalize com manjericão e um fio de azeite.'
  },
  {
    id: 4,
    imagePath: 'assets/images/sushi_dish_1791574490817.jpg',
    category: 'Japonesa',
    title: 'Combinado de Sushi Fresco',
    ingredients: [
      '2 xícaras de arroz próprio para sushi (tipo grão curto)',
      '50ml de vinagre de arroz',
      '2 colheres de sopa de açúcar',
      '1 colher de chá de sal',
      '200g de filé de salmão fresco de corte nobre',
      '100g de atum fresco',
      'Folhas de alga nori, gengibre em conserva, wasabi e molho shoyu'
    ],
    preparationMode: 'Lave o arroz várias vezes até a água escorrer translúcida. Cozinhe com a proporção exata de água e deixe repousar tampado após a fervura. Misture o vinagre, açúcar e sal aquecendo levemente até dissolver, despeje sobre o arroz quente em recipiente de madeira e resfrie abanando delicadamente. Fatie os peixes com uma faca afiada em ângulo de 45 graus para os sashimis e nigiris. Molde pequenas porções de arroz com as mãos úmidas e sobreponha com as fatias de peixe. Monte os rolinhos com auxílio de esteira de bambu (makisu), corte em porções uniformes e sirva com shoyu e wasabi.'
  },
  {
    id: 5,
    imagePath: 'assets/images/dessert_dish_1791574500314.jpg',
    category: 'Sobremesas',
    title: 'Petit Gâteau',
    ingredients: [
      '200g de chocolate meio amargo de boa qualidade',
      '100g de manteiga sem sal em cubos',
      '2 ovos inteiros e 2 gemas',
      '1/2 xícara de açúcar refinado',
      '2 colheres de sopa de farinha de trigo peneirada',
      'Manteiga e cacau em pó para untar as forminhas',
      'Bolas de sorvete de baunilha para acompanhar'
    ],
    preparationMode: 'Derreta o chocolate e a manteiga juntos em banho-maria ou no micro-ondas em potência média, mexendo até ficar brilhante e homogêneo. Em outra tigela, bata os ovos, gemas e açúcar até obter um creme claro. Incorpore delicadamente a mistura de chocolate morno aos ovos. Adicione a farinha peneirada misturando apenas até incorporar. Unte forminhas individuais com manteiga e polvilhe cacau em pó. Despeje a massa nas formas e asse em forno pré-aquecido a 200°C por 7 a 9 minutos (as bordas devem estar firmes e o centro mole ao toque). Desenforme morno e sirva com sorvete de baunilha.'
  },
  {
    id: 6,
    imagePath: 'assets/images/salad_dish_1791574512154.jpg',
    category: 'Saudável',
    title: 'Salada Mediterrânea',
    ingredients: [
      '1 maço de folhas verdes frescas (alface romana e rúcula)',
      '1 xícara de tomates-cereja cortados ao meio',
      '1 pepino japonês cortado em meias-luas finas',
      '1/2 cebola roxa fatiada em tiras finas',
      '100g de queijo feta ou queijo de cabra em cubos',
      '1/2 xícara de azeitonas pretas kalamata',
      'Molho: 4 colheres de azeite extravirgem, suco de 1/2 limão, orégano desidratado e sal'
    ],
    preparationMode: 'Higienize bem todas as folhas, tomates e legumes e seque-os adequadamente. Em uma saladeira grande e rasa, disponha as folhas rasgadas como base. Distribua por cima os tomates cortados, pepino, tiras de cebola roxa e azeitonas. Adicione os cubos de queijo feta por toda a superfície. Em um frasco pequeno, misture vigorosamente o azeite, o suco de limão, o orégano seco e o sal até emulsionar. Regue a salada uniformemente momentos antes de servir para preservar a textura crocante das folhas.'
  }
];

//search.page.ts
import type { Page } from  '@playwright/test';
export class HomeClass{
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }
    async typeSearchText(){
       await this.page.type('#search-input',"São Paulo")
    }
    async pressBuscar(){
      await this.page.click('button:has-text("Buscar")');
    }
    async resultBuySearch(){
      await this.page.textContent('text=Imóveis à venda em São Paulo - SP')
   }
   async searchRentApto(){
      await this.page.locator('span:has-text("Alugar")').click();
      await this.page.type('#search-input',"São Paulo")
      await this.page.locator('text=São Paulo Cathedral - Praça da Sé - Sé, São Paulo - SP, Brasil').click();
      await Promise.all([
         this.page.waitForNavigation(/*{ url: 'https://www.lopes.com.br/busca/aluguel/br/sp/sao-paulo/se/praca-da-se?placeId=ChIJ8e6ysqtZzpQR9QNBpGcus_0&estagio=real_estate&estagio=real_estate_parent&preco-total=total&origem=home' }*/),
         this.page.locator('button:has-text("Buscar")').click()
       ])
   }
   async resultRentSearch(){
      await this.page.textContent('text=Imóveis para alugar na Praça da Sé, Sé, São Paulo - SP')
   }


}
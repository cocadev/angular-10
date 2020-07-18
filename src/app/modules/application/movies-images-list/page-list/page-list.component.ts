import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService } from '../config/config.service';
import { ItemsService } from '../items/items.service';

import { Params } from './params';

@Component({
  selector: 'app-page-list',
  template: ``,
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {

  api: any;
  url: any;
  endpoint: any;
  items: any;
  icon: any;
  columns: any;
  link: any;
  filter = '';
  itemsPerPageDefault = 5;

  placeholder: any;
  results: any;
  creation: any;
  found: any;
  linkRoute: any;
  searchField = '';

  loaded: any;
  query = '';
  params = new Params();

  itemsCount = 0;
  itemsPage = 1;
  itemsPerPage = 4;

  public route: ActivatedRoute;
  public router: Router;
  public configService: ConfigService;
  public itemsService: ItemsService;

  constructor(injector: Injector) {

    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.configService = injector.get(ConfigService);
    this.itemsService = injector.get(ItemsService);

    this.initialize();

  }

  initialize() {
    this.api = this.configService.config.api;
    this.url = this.configService.config.url + this.endpoint;
    this.readQueryParams();
  }

  readQueryParams() {
    this.route.queryParams
      .subscribe(params => {
        this.params.q = params.q;
        if (params.page !== undefined) {
          this.params.page = params.page;
          this.itemsPage = parseInt(this.params.page, 10);
        }
        this.searchField = this.params.q;
        this.getItems();
      });
  }

  getItems() {
    this.loaded = false;
    this.query = this.searchField;
    if (this.endpoint !== undefined) {
      this.itemsService.getItemsCount(this.api, this.url, this.query)
        .subscribe(item => {
          this.itemsCount = item.count;
          if (this.itemsPerPage < 1) {
            this.itemsPerPage = this.itemsPerPageDefault;
          }
          const page = this.itemsPage;
          const totalPages = Math.ceil(this.itemsCount / this.itemsPerPage);
          if (page >= totalPages) {
            this.itemsPage = totalPages;
          }
          this.itemsService.getItems(
            this.api, this.url, this.itemsPerPage, this.itemsPage, this.query)
            .subscribe(items => {
              this.items = items;
              this.loaded = true;
            });
        });
    }
  }

  writeQueryParams(search?: boolean) {
    let query = this.searchField;
    if ((query === '') || (query === undefined)) {
      query = null;
    }
    const url = '/' + this.linkRoute;
    let page = null;
    if (this.itemsPage > 1) {
      page = this.itemsPage.toString();
    }
    this.params.q = query;
    this.params.page = page;
    this.router.navigate([url], { queryParams: this.params });
  }


  search() {
    this.query = this.searchField;
    this.writeQueryParams();
    this.getItems();
  }

  changePage(page: number) {
    this.itemsPage = page;
    this.writeQueryParams();
    this.getItems();
  }

  selectItem(id: any) {
    this.router.navigate(['/' + this.link, id]);
  }

  onChangePage(page: any) {
    this.changePage(page);
  }

  onSearch(query: any) {
    this.searchField = query;
    this.search();
  }

}


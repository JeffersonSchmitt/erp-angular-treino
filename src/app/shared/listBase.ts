import { ActivatedRoute, Router } from '@angular/router';

export interface Item {
  selected?: boolean;
  deleted?: boolean;
}
export abstract class ListBase<T extends Item> {
  selected: T | undefined | null = null;
  items: T[] = [];
  filteredList: T[] = [];
  showFilteredList = false;
  currentPage = 1;
  itemsPerPage = 15;
  totalPages = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  select(item: T) {
    if (!item.selected) {
      this.selected = item;
      this.items.forEach((p) => (p.selected = false));
      item.selected = true;
    } else {
      item.selected = false;
    }
  }

  delete(database: string) {
    if (
      window.confirm('Os dados digitados não serão salvos, deseja continuar?')
    ) {
      const itemToDelete = this.items.find((item) => item.selected === true);
      if (itemToDelete) {
        itemToDelete.deleted = true;
        const index = this.items.findIndex((item) => item === itemToDelete);
        this.items.splice(index, 1, itemToDelete);
      }
      localStorage.setItem(database, JSON.stringify(this.items));
    }
  }

  search(searchTerm: string) {
    searchTerm = searchTerm.trim();
    if (searchTerm.length < 3) {
      this.filteredList = [];
      this.showFilteredList = false;
      return;
    }
    this.filteredList = this.items.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    this.showFilteredList = true;
  }

  get pagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    if (this.items.length <= 0) {
      this.totalPages = 1;
    }

    return this.items.slice(startIndex, endIndex);
  }

  previousPage() {
    this.currentPage -= 1;
    this.pagination;
  }

  nextPage() {
    this.currentPage += 1;
    this.pagination;
  }
}

export interface Ipoke {
  name: String;
  url: Request;
}

export interface Ipokelist {
  count: number;
  next: URL;
  previous: String;
  results: Ipoke[];
}

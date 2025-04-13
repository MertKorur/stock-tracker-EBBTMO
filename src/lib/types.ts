export interface StockResponse {
	ticker: string;
	queryCount: number;
	resultsCount: number;
	adjusted: boolean;
	results: StockResult[];
	status: string;
	request_id: string;
}

export interface StockResult {
	T: string;    // Ticker symbol
	c: number;    // Closing price
	h: number;    // High price
	l: number;    // Low price
	o: number;    // Opening price
	v: number;    // Volume
	vw: number;   // Volume-weighted average price
	t: number;    // Timestamp (milliseconds since epoch)
	n: number;    // Number of trades
}

export interface StockRow {
	ticker: string;
	data: string;
}


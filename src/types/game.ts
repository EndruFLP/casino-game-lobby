export type GameImage = {
	type: string;
	url: string;
	altText?: string;
};

export type ApiGame = {
	id: number;
	gameName: string;
	gameSlug: string;
	images: GameImage[];
	providers: { providerName: string }[];
};

export type ApiGameResponse = {
	data: ApiGame[];
	meta: {
		total: number;
		page: number;
		pageSize: number;
	};
};

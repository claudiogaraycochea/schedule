export const groupList = [
	{
		id: 1,
		name: 'Investors',
		color: 'green',
	},
	{
		id: 2,
		name: 'Developers',
		color: 'violet',
	},
	{
		id: 3,
		name: 'Investors & Devs',
		color: 'blue',
	}
];

export const scheduleList = [
	{
		id: 10,
		groupId: 1,
		title: 'Meeting - Daily',
		createdAt: '03/20/2019',
		updatedAt: '03/21/2019',
	},
	{
		id: 12,
		groupId: 1,
		title: 'Meeting - Poker Planning',
		createdAt: '03/20/2019',
		updatedAt: '03/21/2019',
	},
	{
		id: 13,
		groupId: 2,
		title: 'Meeting - Poker Planning',
		createdAt: '03/20/2019',
		updatedAt: '03/21/2019',
	}
];

export const dataMonth = {
	getToday: () => {
		const today = new Date();
		const day = today.getDate();
		const month = today.getMonth()+1;
		const previousMonth = today.getMonth();
		const year = today.getFullYear();
		const dayPosition = new Date(year, today.getMonth(), 1).getDay(); // day position to start the actual month
		const monthDataEndDay = new Date(year, month, 0).getDate(); // calculate total month days.
		const prevMonthDataEndDay = new Date(year, previousMonth, 0).getDate();
		const prevMonthDataStartDay = (prevMonthDataEndDay - dayPosition);
		const dateObject = {
			day,
			month,
			year,
			monthData: {
				dayPosition,
				endDay: monthDataEndDay,
			},
			prevMonthData: {
				startDay: prevMonthDataStartDay,
				endDay: prevMonthDataEndDay,
			}
		}
		return dateObject;
	},
	getDayNumberToName: (dayNumber) => {
		switch (dayNumber) {
			case 1: return 'sun';
			case 2: return 'mon';
			case 3: return 'tue';
			case 4: return 'wed';
			case 5: return 'thu';
			case 6: return 'fri';
			case 7: return 'sat';
			default: return null;
		}
	}
}
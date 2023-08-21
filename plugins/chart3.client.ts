
// Workaround because chart.js doesn't provide an default export
import { Chart, DoughnutController, ArcElement, Tooltip,registerables } from 'chart.js';

export default defineNuxtPlugin(() => {
    Chart.register(...registerables);
});
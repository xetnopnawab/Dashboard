// types.ts
export type ChartData = {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      fill?: boolean;
      borderColor?: string;
      tension?: number;
    }[];
  };
  
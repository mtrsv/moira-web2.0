import * as React from "react";
import { Loader } from "@skbkontur/react-ui/components/Loader";
import WarningIcon from "@skbkontur/react-icons/Warning";
import cn from "./Layout.less";

type LayoutProps = {
    children?: React.ReactNode;
    loading?: boolean;
    error?: string;
};

type PlateProps = {
    children?: React.ReactNode;
};

type TitleProps = {
    children: React.ReactNode;
};

type ContentProps = {
    children?: React.ReactNode;
};

type PagingProps = {
    children?: React.ReactNode;
};

export default class Layout extends React.Component<LayoutProps> {
    static Plate = function Plate({ children }: PlateProps): React.ReactElement {
        return (
            <div className={cn("grey-plate")}>
                <div className={cn("container")}>{children}</div>
            </div>
        );
    };

    static Title = function Title({ children }: TitleProps): React.ReactElement {
        return <h1 className={cn("title")}>{children}</h1>;
    };

    static Content = function Content({ children }: ContentProps): React.ReactElement {
        return (
            <div className={cn("content")}>
                <div className={cn("container")}>{children}</div>
            </div>
        );
    };

    static Footer = function Paging({ children }: PagingProps): React.ReactElement {
        return (
            <div className={cn("paging")}>
                <div className={cn("container")}>{children}</div>
            </div>
        );
    };

    render(): React.ReactNode {
        const { loading = false, error = null, children } = this.props;
        return (
            <main className={cn("layout")}>
                {error && (
                    <div className={cn("error")}>
                        <WarningIcon /> {error}
                    </div>
                )}
                <Loader className={cn("loading")} active={loading} caption="Loading">
                    {children}
                </Loader>
            </main>
        );
    }
}

export const LayoutTitle = Layout.Title;
export const LayoutPlate = Layout.Plate;
export const LayoutContent = Layout.Content;
export const LayoutFooter = Layout.Footer;

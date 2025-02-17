import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SearchSelector } from "../Components/SearchSelector/SearchSelector";
import { CreeveyTestFunction } from "creevey";

const allTags = ["subscribed", "remaining"];

storiesOf("SearchSelector", module)
    .add(
        "default",
        () => (
            <SearchSelector
                search=""
                allTags={allTags}
                loading={false}
                selectedTokens={[]}
                subscribedTokens={["subscribed"]}
                remainingTokens={["remaining"]}
                onChange={action("onChange")}
                onSearch={action("onSearch")}
            />
        ),
        {
            creevey: {
                captureElement: null,
                tests: {
                    states: async function () {
                        const simple = await this.takeScreenshot();

                        const selector = this.browser.findElement({ css: "#selector" });
                        await this.browser.actions().move({ origin: selector }).perform();
                        await this.browser.actions().click().perform();
                        const clicked = await this.takeScreenshot();

                        await this.expect({ simple, clicked }).to.matchImages();
                    } as CreeveyTestFunction,
                },
            },
        }
    )
    .add("with selected", () => (
        <SearchSelector
            search=""
            allTags={allTags}
            loading={false}
            selectedTokens={["subscribed"]}
            subscribedTokens={["subscribed"]}
            remainingTokens={["remaining"]}
            onChange={action("onSearch")}
            onSearch={action("onSearch")}
        />
    ))
    .add("with search query", () => (
        <SearchSelector
            search="remaining"
            allTags={allTags}
            loading={false}
            selectedTokens={["subscribed"]}
            subscribedTokens={["subscribed"]}
            remainingTokens={["remaining"]}
            onSearch={action("onSearch")}
            onChange={action("onSearch")}
        />
    ))
    .add("no tag for result", () => (
        <SearchSelector
            search="trolo-lo-lo"
            allTags={allTags}
            loading={false}
            selectedTokens={["subscribed", "does_not_exist"]}
            subscribedTokens={["subscribed"]}
            remainingTokens={["remaining"]}
            onSearch={action("onSearch")}
            onChange={action("onSearch")}
        />
    ));

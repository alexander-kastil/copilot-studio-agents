# Lab 01: Build Your First Agent with Agent Builder

In this lab you build a declarative agent for Microsoft 365 Copilot with Agent Builder. The agent, called **Gardener**, helps users maintain and improve a home garden, and it can play a game that asks users to guess the name of a plant or flower from clues. Agent Builder is the easiest way to make a personal agent for Microsoft 365 Copilot, because the agent runs on the same orchestrator, foundation model and security controls as Microsoft 365 Copilot.

![The Gardener agent in Microsoft 365 Copilot Chat, with a few guesses from the user and the agent's replies.](./_images/lab-01-agent-builder-01.gif)

In this lab you learn:

- What a declarative agent for Microsoft 365 Copilot is
- How to make a declarative agent with Agent Builder
- How to customize the agent with specific instructions, so it runs a guessing game
- How to configure the agent to use documents stored in SharePoint Online
- How to enable the agent to generate images
- How to share the agent with other people

## Exercise 1: Create the declarative agent

In this exercise you create the Gardener agent from a natural language description, then test it.

### Step 1: Describe your agent

Open the [Microsoft 365 Copilot chat home page](https://www.microsoft365.com/copilot){target=_blank} and select **New agent** in the left side panel, where the list of available agents is.

![Microsoft 365 Copilot Chat with the New agent command highlighted in the left side panel.](./_images/lab-01-agent-builder-02.png)

Agent Builder opens and you can start defining the custom agent. You can choose a template to start from, or you can describe the agent in natural language. You can also select the **Configure** option to set up the agent by hand, but you do that later in this lab. Provide the following initial description:

```text
You are an expert gardener and you help users to maintain and improve their home garden
providing detailed instructions and advice about the best practices for home gardening.
```

![Agent Builder with a textbox at the lower left for instructions to the builder, and a preview of the agent on the right.](./_images/lab-01-agent-builder-03.png)

Agent Builder then asks for the name of the new agent. Provide the name *Gardener*. While you talk with Agent Builder, the preview on the right side shows the agent itself, including suggested conversation starters. If Agent Builder asks you to refine the instructions further, provide the following sentence.

```text
Suggest ways to keep plants and flowers shining and gorgeous
```

![Agent Builder with the conversation on the lower left and the agent preview on the right.](./_images/lab-01-agent-builder-04.png)

Keep interacting with Agent Builder until it has all the information it needs to create the agent. If Agent Builder asks what should be emphasized, provide the following text.

```text
Highlight the importance of nature and plants/flowers to be present in every house!
Use a professional, yet friendly, tone.
```

Say that you have no further refinements, then select the **Create** button in the upper right corner of the screen.

![Agent Builder with the Create button in the upper right corner highlighted.](./_images/lab-01-agent-builder-05.png)

Agent Builder creates the new agent from the instructions you provided.

### Step 2: Test the agent

When the agent is ready, a popup dialog shows a command to **Go to agent** and another command to **Share** the agent with other people in your organization.

![The dialog confirming the new Gardener agent, with a command to go to the agent and a command to share it.](./_images/lab-01-agent-builder-06.png)

Select the **Go to agent** button. The user experience of the new agent opens.

![The Gardener agent with its name at the top, a set of generated conversation starters, and a textbox for a new prompt.](./_images/lab-01-agent-builder-07.png)

Select the first suggested prompt and observe the response from the agent. Your agent is now ready.

![The Gardener agent answering the first suggested prompt, with the list of available agents and recent chats on the right.](./_images/lab-01-agent-builder-08.png)

## Exercise 2: Customize the agent

In this exercise you add a custom icon to the agent and define the rules of the plant and flower guessing game.

Select **New chat** in the upper left corner of the Microsoft 365 Copilot Chat user interface. Select **All agents** in the left side of the screen. Hover over the **Gardener** agent, select the **...** beside its name, and select **Edit** in the contextual menu to configure the agent.

![Agent Builder when editing an existing agent, with the Edit command in the contextual menu of the agent.](./_images/lab-01-agent-builder-09.png)

A new page with all the settings of your agent opens.

![The agent settings page in Agent Builder, with an Update command in the upper right corner.](./_images/lab-01-agent-builder-10.png)

### Step 1: Provide a custom icon

The dialog starts with the **Configure** panel active. The descriptions you provided in Exercise 1 are now the settings of the agent. The configuration settings are:

- **Icon**: customizes the icon of the agent
- **Name**: the name of the agent
- **Description**: the description of the agent
- **Instructions**: the system prompt for the agent, where you define the system role and the behavioral rules
- **Knowledge**: configures the knowledge bases for the agent
- **Capabilities**: enables capabilities such as code interpreting and image generation
- **Suggested prompts**: configures up to 6 suggested prompts for the agent

Select the edit button beside the default icon of the agent.

A dialog opens where you can change the icon and the background color of the icon. You can download a sample icon from [the lab repository](https://github.com/microsoft/copilot-camp/blob/main/src/make/agent-builder/color.png) and upload it as the custom icon. You can also set the background color to the RGB value #F1F1F1.

![The dialog to update the icon and background color of the agent, with a button to upload an icon and a button to set the background color. Save and cancel buttons are in the lower right corner.](./_images/lab-01-agent-builder-11.png)

Select the **Apply** command when you are done.

### Step 2: Define the guess plant/flower game rules

While you are still editing the agent settings, replace the content of the **Instructions** field with the following text.

```text
You are an expert gardener and you help users to maintain and improve their home garden
providing detailed instructions and advice about the best practices for home gardening.
Here are your working rules:

- Provide detailed instructions and advice about the best practices for home gardening.
- Help users maintain and improve their home garden.
- Offer tips on plant care, soil management, pest control, and seasonal gardening tasks.
- Respond to user queries with clear and actionable steps.
- Be friendly, knowledgeable, and supportive in all interactions.
- Suggest ways to keep plants and flowers shining and gorgeous, including watering
schedules, fertilization, pruning, and pest control.
- Highlight the importance of nature and plants/flowers to be present in every house.
- Use a professional, yet friendly, tone in all responses.

Lastly, engage the user in a challenging game to guess the name of a plant or flower based
on a set of clues. Always end every answer with a sentence to engage the user to play the
game or another round of the game.
```

![The agent settings dialog with the updated instructions and the Update button highlighted.](./_images/lab-01-agent-builder-12.png)

Select the **Update** button in the upper right corner of the configuration dialog. The update takes a while. When it finishes, select **Go to agent** and send the agent a request. The agent engages you in the game.

![The updated Gardener agent with its new icon and the closing sentence that invites the user to play the game.](./_images/lab-01-agent-builder-13.png)

The following sample conversation shows the agent while guessing the name of a plant.

![A sample conversation in which the user guesses the name of a plant and the agent responds with clues.](./_images/lab-01-agent-builder-14.png)

## Exercise 3: Add a SharePoint Online knowledge base

In this exercise you add Word documents from SharePoint Online as an additional knowledge base for the **Gardener** agent.

### Step 1: Upload the knowledge base documents

Add a knowledge base with Word documents that contain information about plants and flowers. Download the four DOCX files from this lab's folder:

- [Basic Aspects of Gardening and Maintaining a Healthy Garden.docx](./lab-01-agent-builder/Basic%20Aspects%20of%20Gardening%20and%20Maintaining%20a%20Healthy%20Garden.docx)
- [Common Plants List.docx](./lab-01-agent-builder/Common%20Plants%20List.docx)
- [Healing a Plant in Your Garden.docx](./lab-01-agent-builder/Healing%20a%20Plant%20in%20Your%20Garden.docx)
- [The Most Common Types of Plants in a Home Garden.docx](./lab-01-agent-builder/The%20Most%20Common%20Types%20of%20Plants%20in%20a%20Home%20Garden.docx)

You can also download the same four files as a zip from [this link](https://download-directory.github.io/?url=https://github.com/microsoft/copilot-camp/tree/main/src/make/agent-builder/sharepoint-docs&filename=sharepoint-docs).

Upload the four files to a SharePoint Teams site in the same tenant where you are testing this lab. Put the files in the document library **Documents**. These documents make the agent more expert and the game more challenging.

Copy the absolute URL of the site, for example `https://xyz.sharepoint.com/sites/contoso`.

### Step 2: Add support for SharePoint Online documents

Go back to the list of agents, edit the **Gardener** agent, and scroll to the **Knowledge** section of the configuration. Paste the URL of the SharePoint Online site into the field for a SharePoint knowledge base and press **ENTER**, or select the suggested site collection. You can also select the **Sites** button and search for the site in your tenant.

![The agent configuration dialog with the Knowledge section and the SharePoint URL field highlighted.](./_images/lab-01-agent-builder-15.png)

The new SharePoint site appears in the list of knowledge bases for the **Gardener** agent. Select **Update** and interact with the agent again. The answers are more specialized because they draw on the knowledge base you provided.

## Exercise 4: Add finishing touches to the agent

In this exercise you enable image generation for the **Gardener** agent and share it with your colleagues.

### Step 1: Add support for image generation

Edit the **Gardener** agent again, scroll down in the configuration panel to the **Capabilities** section, and enable the option **Create images**. Then update the agent.

![The agent configuration dialog with the Capabilities section and the Create images option selected and highlighted.](./_images/lab-01-agent-builder-16.png)

After the update, select **Go to agent** and provide the following prompt.

```text
Generate the image of a dozen of red roses
```

The agent answers with a generated image of red roses.

![The Gardener agent answering the prompt with a generated image of a dozen red roses.](./_images/lab-01-agent-builder-17.png)

### Step 2: Share the agent

Edit the agent one last time. In the upper right corner, next to the **Update** button, select **Share**.

A sharing dialog opens. You can share the agent with any of these targets:

- Anyone in your organization
- Specific users in your organization, through security groups
- Only you

Select the option to share with specific users, provide the email address of the sharing target, and select **Apply** to confirm the sharing settings. When the sharing process ends, a dialog shows a URL. Copy the URL and give it to the users you shared the agent with.

![The sharing panel with the options Anyone in your organization, Specific users in your organization through security groups, and Only you, plus a Save button and the agent URL.](./_images/lab-01-agent-builder-18.png)

## Resources

- [Declarative agents](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-copilot){target=_blank}
- [Build agents with Agent Builder](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-build){target=_blank}
- [Publish and manage Agent Builder agents](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-publish){target=_blank}

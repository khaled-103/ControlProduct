<template>
  <div class="root">
    <CustomCheckbox input-label="Add specifications"></CustomCheckbox>
    <p class="intro">please click to activate the Feature</p>
    <div style="overflow-x: auto">
      <table class="general-table">
        <thead>
          <tr>
            <th class="px-2">specifications</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>size</td>
            <td
              class="position-relative justify-space-between align-items-center d-flex"
            >
              <div class="d-flex flex-grow-1">
                <TheBadge appendIcon="bi-file-earmark-image" content="S" />
                <TheBadge
                  transparent
                  appendIcon="bi-file-earmark-image"
                  content="M"
                />
                <TheBadge appendIcon="bi-file-earmark-image" content="L" />
              </div>
              <i class="bi bi-plus"></i>
            </td>
          </tr>
          <tr>
            <td>type</td>
            <td
              class="position-relative justify-space-between align-items-center d-flex"
            >
              <div class="d-flex flex-grow-1">
                <TheBadge
                  appendIcon="bi-file-earmark-image"
                  content="hot drinks"
                />
                <TheBadge
                  transparent
                  appendIcon="bi-file-earmark-image"
                  content="cold drinks"
                />
              </div>
              <i class="bi bi-plus"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <AddMore text="Add  More Specifications"/>
  </div>
</template>
<style scoped>
.root {
  margin-top: 20px;
}
.bi-plus {
  font-size: 24px;
  cursor: pointer;
  margin-right: 18px;
}
p.intro {
  color: var(--secondery-dark1);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin: 10px 0 20px 0;
}

</style>
<template>
  <div>
    <div class="selection">
      <label class="choose-group-label">
        <input type="radio" class="choose-group-input" name="groupInput" id="selction-1" />
        <i class="choose-group-icon"></i>
      </label>
      <label for="selction-1">
        <span>选项一</span>
      </label>
    </div>
    <div class="selection">
      <label class="choose-group-label">
        <input type="radio" class="choose-group-input" name="groupInput" id="selction-2" />
        <i class="choose-group-icon"></i>
      </label>
      <label for="selction-2">
        <span>选项二</span>
      </label>
    </div>
  </div>
</template>

<style>
.selection {
  margin-bottom: 10px;
}
.choose-group-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #3eaf7c;
  border-radius: 50%;
  vertical-align: middle;
}
.choose-group-label {
  display: inline-block;
  position: relative;
  top: -2px;
  left: 0;
  margin-right: 5px;
}
.choose-group-input {
  display: none;
}
.choose-group-input:checked + .choose-group-icon {
  background: url(/selected-icon.png);
  background-size: 100% 100%;
}
</style>
